import React, {memo, useEffect,useRef} from "react";
import '../css/category.css'

const Category = memo(function Category({items, onClickItem, activeCategory, saveEffect, locationLine}){
    const lineRef = useRef()

    const setSelectorItem = (index,e) =>{
        onClickItem(index)
        saveEffect(e.target.clientWidth, e.target.offsetLeft)
        lineRef.current.style.width = e.target.clientWidth+'px'
        lineRef.current.style.left = e.target.offsetLeft+'px'
    }

    useEffect(()=>{
        lineRef.current.style.width = locationLine.width + 'px'
        lineRef.current.style.left =  locationLine.left + 'px'
    },[])

    return(
        <div className="container--category">
            <ul className="caregory-items">
                <div ref={lineRef} className="caregory--line"></div>
                <li className={activeCategory === null? 'item active': 'item'} onClick={(e) => setSelectorItem(null,e)}> Все </li>
                {items.map((item, index)=>{return <li className={activeCategory === index? 'item active': 'item'} onClick={(e) => setSelectorItem(index,e)} key={`${item}_${index}`}>{item}</li>})}
            </ul>
        </div>
    )
})

export default Category