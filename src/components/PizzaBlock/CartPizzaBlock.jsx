import React, {useState, useRef, useEffect} from "react";
import {addPizzasToCart, deleteOnePizzas, deletePizzasToCart} from '../../redux/cart'
import { HiOutlineMinusCircle,HiOutlinePlusCircle, HiOutlineXCircle } from "react-icons/hi";
import { BsEyeSlashFill, BsQuestionCircle } from "react-icons/bs";

const CartPizzaBlock = ({pizza, dispatch}) => {
    const [state, setstate] = useState(false)
    console.log(pizza)
    const {imageUrl, name, type, size, finalPrice, additive} = pizza[0]
    const price = finalPrice * pizza.length
    const infoRef1 = useRef()
    const infoRef2 = useRef()


    const addPizza = ()=>{
        dispatch(addPizzasToCart(pizza[0]))
    } 
    const deleteOnePizza = ()=>{
        dispatch(deleteOnePizzas(pizza[0]))
    } 
    const deletePizza = ()=>{
        dispatch(deletePizzasToCart(pizza[0]))
    } 

    const AdditionalInf = () =>{
        setstate(prev => !prev)
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(infoRef2.current) && !path.includes(infoRef1.current) ) {
            setstate(false);
        }
    };

    useEffect(()=>{
        document.body.addEventListener('click', handleOutsideClick);
        return function (){
            document.body.removeEventListener('click', handleOutsideClick);
        }
    },[])

    return(
        <div className="cart-item">
            <div ref={infoRef1} onClick={AdditionalInf} className="cart-info"><BsQuestionCircle size="20px"/>
                {state && <div ref={infoRef2}  className="container--additionInfo">Дополнители: 
                    {additive.length>0
                    ?additive.map((item,i)=>{return <div key={i}><div className='additive-title'>{item.name} х 1</div></div>})
                    :"Отсутствуют"
                    }
            </div>}
            
            </div>
            <div className="cart-item-image">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="cart-item-name">
                <span className="cart-item-namepizza"> {name} </span>
                <span className="cart-item-typepizza"> {type} тесто, {size} см. </span>

            </div>
            <div className="cart-item-count">
                <div onClick={deleteOnePizza} className="cart-btn btn-subtraction"><HiOutlineMinusCircle size="35px" color="#ee5c02"/> </div>
                <div>{pizza.length}</div>
                <div onClick={addPizza} className="cart-btn btn-add"><HiOutlinePlusCircle size="35px" color="#ee5c02"/> </div>
            </div>
            <div className="cart-item-price">
                {price} ₽
            </div>
            <div className="cart-item-delete">
                <div onClick={deletePizza} className="cart-btn btn-delete"><HiOutlineXCircle size="35px" /> </div>
            </div>
            
        </div>

    )
}

export default CartPizzaBlock