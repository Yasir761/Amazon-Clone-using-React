import React from 'react'
import './Subtotal.css'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducers'
import { useNavigate } from 'react-router-dom'
const Subtotal = () => {
  const [{basket}, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                    <small
                    className='subtotal__gift'
                    >
                        <input type="checkbox" />
                        This order contains a gift
                    </small>

            </>

        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs "}
    />
    <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal