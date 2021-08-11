import React, {memo} from "react";
import '../css/navbar.css'
import logoSvg from '../assets/img/pizza-logo.svg';
import cart from '../assets/img/cart1.svg';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = memo(function Navbar() {
    const {countPizzas, priceCart} = useSelector(({cartReducer})=> cartReducer)

    return(
        <div className="header">
            <div className="container">
                <NavLink to={'/'} className="Link--logo">
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to={'/cart'} className="Link--cart">
                    <div className="button button--cart">
                        <div className="cart--price">
                            {priceCart} ₽
                        </div>
                        <div className="cart--line"></div>
                        <div className="cart--count">
                            <img width="23" src={cart} alt="Pizza logo" />
                            <div className="cartItemCount">{countPizzas}</div>
                        </div>
                    </div>
                </NavLink>

            </div>
        </div>
    )
})

export default Navbar