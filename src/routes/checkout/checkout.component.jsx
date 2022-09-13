import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.style.scss'

const Checkout = () => {
    const { cartItems,total} = useContext(CartContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-blocker">
                    <span>Product</span>
                </div>
                <div className="header-blocker">
                    <span>Description</span>
                </div>
                <div className="header-blocker">
                    <span>Price</span>
                </div>
                <div className="header-blocker">
                    <span>Quantity</span>
                </div>
                <div className="header-blocker">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((item) => {
                const { id } = item
                return (
                    <CheckoutItem key={id} item={item} />
                )

            })}
            <span className="total">Total:${total}</span>
        </div>
    )

}

export default Checkout