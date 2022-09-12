import { useContext } from 'react'
import '../../contexts/cart.context'
import { CartContext } from '../../contexts/cart.context'

import './checkout-item.style.scss'

const CheckoutItem = ({ item }) => {
    const { name, price, quantity, imageUrl } = item

    const { increaseItem, decreaseItem, deleteItem } = useContext(CartContext)

    const increaseHandler = ()=>increaseItem(item)
    const decreaseHandler = ()=>decreaseItem(item)
    const deleteHandler = ()=>deleteItem(item)


    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteHandler}>&#10005;</div>

        </div>
    )
}

export default CheckoutItem