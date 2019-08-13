import React from 'react'

const styled = {
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "36px",
    lineHeight: "48px",
    textAlign: "center",
    color: "#323C48"
}

function ProductListHeading (props) {
    return <h2 style={styled}>{props.children}</h2>
}

export default ProductListHeading