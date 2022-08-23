import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'
const Product = ({id,title,image,price,rating}) => {
const [{basket}, dispatch] = useStateValue()
// console.log('this is the basket :', basket)
  const addToCart= ()=>{
    // dispatch the item inti data layer//
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        key:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  }
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className='product__price'><small>Rs.</small>
        <strong>{price}</strong></p>
        <div className="product__rating"> 
        {Array(rating).fill().map((_)=>(

            
          <p>

          ⭐
          </p>
          
        ))}
        {/* <p>{rating}</p> */}
            
        </div>
      </div> 

      <img src={image} alt="First_product" /> 
    <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Product