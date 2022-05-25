import React, { useState } from 'react';
import CartItemCard from '../../Cards/CartItemCard/CartItemCard';
import './cart.css'

function Cart() {
    const [cartItems, setCartItems] = useState(0)
    return (
        <div className='cart__wrapper'>

            <div className='cart__header'>
                <h2 className='cart__header_text'>
                    cart
                </h2>
            </div>
            <CartItemCard />
        </div>
    )
}

export default Cart