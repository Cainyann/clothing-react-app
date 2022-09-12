import {useContext} from 'react'
import {CartContext} from '../../contexts/cart.context'

import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen,cartCount}  = useContext(CartContext)
    const toggleCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    return (
        <div className="cart-icon-container">

            <div className="shopping-icon" onClick={toggleCartOpen}>
                <ShoppingIcon />
            </div>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon