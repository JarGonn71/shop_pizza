import React, {memo, useCallback, useEffect, useState} from "react"
import '../../css/pizzaWindow.css'
import { HiOutlineCheckCircle } from "react-icons/hi";



const AdditiveItem = memo(function AdditiveItem ({imageAdditive, price,index, name, callbackPrice}){
    const [activeItem, setActiveItem] = useState(false)

    console.log('render AdditiveItem')

    useEffect(()=>{
        callbackPrice(activeItem, index)
    },[activeItem])

    const updateActiveItem = useCallback((index) =>{
        setActiveItem(prev => !prev)
    },[])

    return(
        <div onClick={updateActiveItem} className={activeItem?'additive-item active':'additive-item'}>
            {activeItem && <div className="ActiveIcon"><HiOutlineCheckCircle size='25px' color='#ee5c02'/></div>}
            <div className='additive-wrap-image'>
                <img className='additive-image' src={imageAdditive} alt=""/>
            </div>
            <div className='additive-title'>{name}</div>
            <div className='additive-price'>{price} ₽</div>
        </div>
    )
})

export default AdditiveItem