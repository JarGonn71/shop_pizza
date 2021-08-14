import React, {memo, useEffect, useState} from "react";
import '../../css/pizzaBlock.css'
import ModalWindow from "../../modalWindows/ModalWindow";
import {useSelector} from "react-redux";



const PizzaBlock = memo(function PizzaBlock ({id, imageUrl, name, price, props} ){
    console.log('Render PizzaBlock')
    const [showModal, setShowModal] = useState(false)
    const openModal = () =>{
        setShowModal(prev => !prev)
    }
    useEffect(()=>{
        showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    },[showModal])

    return(
        <div className="pizza-block">
            <div className="wrapper--image">
                <img
                    onClick={openModal}
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <h4 className="pizza-block__title">{name}</h4>

            <div className="pizza-block__bottom" >
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--add " onClick={openModal}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd"></path><path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"></path></svg>
                    <div className="button--text">Выбрать</div>
                </div>
            </div>

            {showModal && <ModalWindow  {...props} active={showModal} setActive={setShowModal}/>}
        </div>
    )
})

export default PizzaBlock
