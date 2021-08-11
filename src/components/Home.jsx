import React, {useCallback, useEffect} from "react";
import '../css/home.css'
import Category from "./Category";
import SortPopup from "./SortPopup";
import PizzaBlock from "./PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSort} from "../redux/filter";
import {fetchPizzas} from "../redux/pizzas";
import LoaderBlockPizzas from "../preLoader/loaderBlockPizzas";
import {setWidthAndLeft} from "../redux/showEffect";
import {useSpring, animated} from "react-spring"



const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'по пулярности', type: 'rating', order: 'desc' },
    { name: 'по цене', type: 'price', order: 'desc'},
    { name: 'по алфавит', type: 'name', order: 'asc' },
];


const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({pizzasReducer }) => pizzasReducer.items)
    const loaderPizzas = useSelector(({pizzasReducer }) => pizzasReducer.isLoaded)
    const {category, sortBy} = useSelector(({filterReducer}) => filterReducer)
    const locationLine = useSelector(({effectReducer}) => effectReducer)

    const [styles, api] = useSpring(() => ({
        from: { x: -50, opacity: 1 },
    }))

    useEffect(()=>{
        dispatch(fetchPizzas(category, sortBy))
    },[category, sortBy])

    useEffect(()=>{
        api({
            to:{
                x: 0,
                opacity: 1,
            },
            from:{
                x: 100,
                opacity: 0,
            }
        })
    },[category])

    const onSelectCategory =  useCallback((index) =>{
        return dispatch(setCategory(index))
    },[])

    const onSelectFilter =  useCallback((type) =>{
        return dispatch(setSort(type))
    },[])

    const saveEffect = useCallback((width, left) =>{
        return dispatch(setWidthAndLeft(width, left))
    },[])

    return(
        <div className="container--home">

            <div className="home-navbar">
                <Category locationLine={locationLine} saveEffect={saveEffect} onClickItem={onSelectCategory} items={categoryNames} activeCategory={category}/>
                <SortPopup onClickType={onSelectFilter} items={sortItems} />
            </div>

            <div className="home-content">
                <animated.div  style={styles}><h2 className="content__title">{category !==null? categoryNames[category]: 'Все пиццы'}</h2></animated.div>
                <div className="content__items">
                    {loaderPizzas
                        ? items.map((p)=>{return <PizzaBlock key={p.id}  props={p} {...p}/>})
                        : Array(9).fill(0).map((_,i)=>{return <LoaderBlockPizzas key={i}/> })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home