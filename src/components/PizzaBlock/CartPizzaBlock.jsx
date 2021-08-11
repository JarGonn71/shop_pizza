import React from "react";


const CartPizzaBlock = ({id, name, finalPrice, imageUrl, size, type, additive}) =>{

    return(
        <div className="cart-item">
            <div className="cart-item-image">
                <img  src={imageUrl} alt=""/>
            </div>
            <div className="cart-item-name">
                <span> {name} </span>
                <span> {type} тесто, {size} см. </span>

            </div>
            <div className="cart-item-price">
                {finalPrice} ₽
            </div>
            <div className="cart-item-delete">

            </div>
        </div>

    )
}

export default CartPizzaBlock