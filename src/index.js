import React from 'react'
import ReactDOM from 'react-dom'

import ProductListHeading from './components/ProductListHeading'
import ProductList from './components/ProductList'

import data from './products.json'

function App () {
  return (
    <div style={{width: "100%"}}>
      <ProductListHeading>
        Product List
      </ProductListHeading>
      <ProductList items={data} />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
