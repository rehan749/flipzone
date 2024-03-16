import React from 'react'

const CategoryMenu = () => {
  return (
    <div className="container-fluid pt-3">

    <ul className='item d-flex justify-content-between list-unstyled'>
        <li className='items'>
          <img src="item1.webp" alt="" />
          <p className='item-name'>Grocery</p>
        </li>
        <li className='items'>
          <img src="item2.webp" alt="" />
          <p className='item-name'>Mobiles</p>
        </li>
        <li className='items'>
        <img src="item3.webp" alt="" />
        <p className='item-name'>Fashion</p>
        </li>
        <li className='items'>
        <img src="item7.png" alt="" />
        <p className='item-name'>Footwear</p>
        </li>
        <li className='items'>
        <img src="item4.webp" alt="" />
        <p className='item-name'>Electronics</p>
        </li>
        <li className='items'>
        <img src="item5.webp" alt="" />
        <p className='item-name'>Home & Furniture</p>
        </li>
        <li className='items'>
        <img src="item6.webp" alt="" />
        <p className='item-name'>Beauty, Toys & More</p>
        </li>
        
        <li className='items'>
        <img src="item8.png" alt="" />
        <p className='item-name'>Watches</p>
        </li>
    </ul>
    </div>
  )
}

export default CategoryMenu