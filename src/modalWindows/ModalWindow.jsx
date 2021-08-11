import React, {useRef, useEffect, useState, useCallback, memo} from "react";
import '../css/pizzaWindow.css'
import classNames from "classnames";
import AdditiveItem from "../components/PizzaBlock/AdditiveItem";
import useFinalPrice from "../hooks/useFinalPrice";
import {useDispatch} from "react-redux";
import {addPizzasToCart} from "../redux/cart";
const typesName = ['тонкое', 'традиционное']
const sizeName = [26, 30, 40]

const ModalWindow = memo(function ModalWindow({id, imageUrl, name, prices, sizes, types, active, setActive, additive}){
    console.log('Render ModalWindow')
    const dispatch = useDispatch()
    const modalRef = useRef()
    const modalPizzaRef = useRef()
    const [size, setSize] = useState(sizes[0])
    const [activePrice, setActivePrice] = useState(prices[sizes[0]])
    const [ActiveType, setActiveType] = useState(types[0])

    const [typeAcc, setTypeAcc] = useState(false)
    const [indexAcc, setIndexAcc] = useState(0)
    const {price,activeAdditiveItems} = useFinalPrice(typeAcc, indexAcc, additive)


    let finalPrice =  price + activePrice


    const addPizzas = () =>{
        dispatch(addPizzasToCart({id, finalPrice, imageUrl, name , type:typesName[ActiveType], size: size, additive:activeAdditiveItems}))
    }

    const callbackPrice = useCallback((type, index) => {
        setTypeAcc(type)
        setIndexAcc(index)
    }, [])

    const buttonClose=()=>{
        setActive(false)
    }

    const closeModel = (e) => {
        if (modalRef.current === e.target) {
            setActive(prev => !prev)
        }
    }

    const setSelectorType = (index) => {
        setActiveType(index)
    }

    const setSelectorSize = (activeSize) => {
        setSize(activeSize)
        setActivePrice(prices[activeSize])
    }

    useEffect(() => {
        {modalPizzaRef.current && modalPizzaRef.current.classList.add('active')}
    }, [active])


    return (
        <>
            {active ?
                <div ref={modalRef} className={'background'} onClick={closeModel}>
                    <div ref={modalPizzaRef} className={'WindowContainer-wrapper'}>
                        <div onClick={buttonClose} className='button--close'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path></svg>
                        </div>
                        <div className="modal_image">
                            <img className={classNames("pizza-image", {
                                "little": size === sizeName[0],
                                "middle": size === sizeName[1],
                                "big": size === sizeName[2],
                            })}
                                 src={imageUrl}
                                 alt="Pizza"
                            />
                        </div>

                        <div className="modal_info">
                            <div>
                                <div className="wrapper-info">
                                    <div className="modal_title">{name}</div>
                                    <p>{size} см, {typesName[ActiveType]} тесто., 390 г. </p>
                                    <div className="pizza-block__selector">
                                        <ul className="pizza-block__type">
                                            {typesName.map((t, i) => {
                                                return <li onClick={() => setSelectorType(i)}
                                                           className={classNames({
                                                               'active': ActiveType === i,
                                                               'disable': !types.includes(i),
                                                           })} key={t}>{t}</li>
                                            })}
                                        </ul>
                                        <ul className="pizza-block__size">
                                            {sizeName.map((s, i) => {
                                                return <li onClick={() => setSelectorSize(s)}
                                                           className={classNames({
                                                               'active': size === s,
                                                               'disable': !sizes.includes(s)
                                                           })} key={s}>{s} см.</li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="title-additive">Добавить в пиццу</div>
                                    <div className="wrapper-additive">
                                        {additive.map((additiveItem, index) => {
                                            return (
                                                <AdditiveItem
                                                    key={`${additiveItem.name}+${index}`}
                                                    callbackPrice={callbackPrice}
                                                    index={index} {...additiveItem} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="modal-wrapper-button">
                                <div onClick={addPizzas} className="modal-button">Добавить в корзину
                                    за {finalPrice} ₽
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                : null
            }
        </>

    )
})

export default ModalWindow

