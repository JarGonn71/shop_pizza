import React from "react";
import {NavLink} from "react-router-dom";
import '../css/cart.css'

import trash from '../assets/img/trash.svg'
import cart from '../assets/img/cart2.svg'
import greyArrowLeft from '../assets/img/grey-arrow-left.svg'
import {useSelector} from "react-redux";
import CartPizzaBlock from "./PizzaBlock/CartPizzaBlock";



const Cart = () => {
    const {items, countPizzas, priceCart} = useSelector(({cartReducer})=> cartReducer)
    const Pizzas = [].concat.apply([], Object.values(items))
    console.log(Pizzas)

    return (
        <div className="container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="contentCart__title"><img src={cart} alt=""/>Корзина</h2>
                    <div className="cart__clear">
                        <img src={trash} alt=""/>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="cart-content__items">
                    {Pizzas && Pizzas.map((pizza,i)=>{
                        return <CartPizzaBlock key={i} {...pizza}/>
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
        </div>
    )
}

export default Cart