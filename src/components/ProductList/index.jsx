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
            {props.items.map(item => <ProductItem {...item} />)}
        </ul>
    )
}

export default ProductList