import React from 'react'

import ProductItem from 'csssr-school-product-card'

const styled = {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0 auto"
}

function ProductList (props) {
    return (
        <ul style={styled}>
            <ProductItem 
                isInStock={true}
                img="https://www.slamdunk.su/thumbs/5b7551b2cd88bBQ8452-401-PHSRH000-2000.jpeg"
                title="Название первого товара"
                price="3 000"
                subPriceContent="4 000"
                maxRating={5}
                rating={4}
                ratingComponent={() => null}
            />
            <ProductItem 
                isInStock={true}
                img="https://www.slamdunk.su/thumbs/5b7551b2cd88bBQ8452-401-PHSRH000-2000.jpeg"
                title="Название первого товара"
                price="3 000"
                subPriceContent="4 000"
                maxRating={5}
                rating={4}
                ratingComponent={() => null}
            />
            <ProductItem 
                isInStock={true}
                img="https://www.slamdunk.su/thumbs/5b7551b2cd88bBQ8452-401-PHSRH000-2000.jpeg"
                title="Название первого товара"
                price="3 000"
                subPriceContent="4 000"
                maxRating={5}
                rating={4}
                ratingComponent={() => null}
            />
        </ul>
    )
}

export default ProductList