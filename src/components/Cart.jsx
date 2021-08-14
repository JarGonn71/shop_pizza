import React from "react";
import {NavLink} from "react-router-dom";
import '../css/cart.css'
import trash from '../assets/img/trash.svg'
import cart from '../assets/img/cart2.svg'
import emptyCart from '../assets/img/empty-cart.png'
import greyArrowLeft from '../assets/img/grey-arrow-left.svg'
import {useSelector, useDispatch} from "react-redux";
import CartPizzaBlock from "./PizzaBlock/CartPizzaBlock";
import {clearCart} from "../redux/cart"



const Cart = () => {
    const {items, countPizzas, priceCart} = useSelector(({cartReducer})=> cartReducer)
    const Pizzas = Object.values(items)
    const dispatch = useDispatch()

    const clearToCart = () =>{
       dispatch(clearCart())
    }
    
    return (
        <div className="container--cart">
            {countPizzas>0?
            <div className="cart">
                <div className="cart__top">
                    <h2 className="contentCart__title"><img src={cart} alt=""/>Корзина</h2>
                    <div  onClick={clearToCart} className="cart__clear">
                        <img src={trash} alt=""/>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="cart-content__items">
                    {Pizzas && Pizzas.map((pizza,i)=>{
                        return <CartPizzaBlock dispatch={dispatch} key={i} pizza={pizza}/>
                    })}
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b>{countPizzas} шт.</b> </span>
                        <span> Сумма заказа: <b>{priceCart} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <NavLink to="/" className="button go-back-btn">
                            <img src={greyArrowLeft} alt=""/>
                            <span>Вернуться назад</span>
                        </NavLink>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="defoltCart">
                <div className="DefoltCartTop">
                    <div className="cartStatus">Корзина пуста</div>
                    <p>Вероятнее всего, вы еще не заказывали пиццу.</p>
                    <p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
                </div>
                <div className="defoltCartImage">
                    <img src={emptyCart} alt="" />
                </div>
                <div className="defoltCartBottom">
                    <NavLink to="/" className="button go-back-btn2">
                        <span>Вернуться назад</span>
                    </NavLink>          
                </div>
               
            </div>
            }
        </div>
    )
}

export default Cart