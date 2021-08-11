import React from "react";
import ContentLoader from "react-content-loader"
import '../css/pizzaBlock.css'

const LoaderBlockPizzas = (props) => {
    return(
        <div className="pizza-block">
            <ContentLoader
                speed={1}
                width={240}
                height={389}
                viewBox="0 0 240 389"
                backgroundColor="#afacac"
                foregroundColor="#ededed"
            >
                <rect x="0" y="0" rx="21" ry="21" width="240" height="389" />
            </ContentLoader>
        </div>

    )
}


export default LoaderBlockPizzas