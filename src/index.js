import React from 'react'
import ReactDOM from 'react-dom'

import data from './products.json'

function App () {
  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {
          data.slice(0, 3).
            map((item) => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
