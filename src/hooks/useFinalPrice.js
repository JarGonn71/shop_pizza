import {useEffect, useState} from "react";

const useFinalPrice = (type, index, array) =>{
    const [price, setPrice] = useState(0)
    const [activeAdditiveItems, setActiveAdditiveItems] = useState([])

    useEffect(()=>{
        let activeItem = []
        if(type){
            if(!activeItem.includes(array[index])){
                activeItem = [...activeAdditiveItems, array[index]]
            }
        }
        else {
            if(activeAdditiveItems.indexOf(array[index]) !== -1){
                activeItem = activeAdditiveItems
                activeItem.splice(activeItem.indexOf(array[index]),1)
            }
        }
        setActiveAdditiveItems(activeItem)
        let finalPrice = 0
        activeItem.forEach(function(item, i, activeItem) {
            finalPrice+=item.price
        });
        setPrice(finalPrice)
    },[type,index])


    return {price,activeAdditiveItems}

}

export default useFinalPrice