import React from 'react'

import product_card from '../data/product_data'
import './mainContent.css'

const MainContent = () => {
  const listItems = product_card.map(item => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2 className="">{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  ))

  return (
    <div className="main-content">
      <h3> Headphones </h3>
      {listItems}
    </div>
  )
}

export default MainContent
