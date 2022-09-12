import { createContext, useState, useEffect } from 'react'


//辅助函数（高阶函数）把一些内置参数在一开始传好，从而组件使用函数的时候只需要传入更少的必要参数
//用于
const addCartItem = (cartItems, productToAdd) => {
    //判断cartItems是否已经包含produtToAdd
    //包含：quantity+1
    //不包含：add item
    //返回并设置新的cartItems
    const isItemExisting = cartItems.find((item) => {
        return item.id === productToAdd.id
    })
    if (isItemExisting) {
        return cartItems.map((item) => (
            item.id === productToAdd.id ?
                { ...item, quantity: item.quantity + 1 } : item
        ))
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const increaseItemHelper = (cartItems, targetItem) => {
   const newCartItems = cartItems.map((item) => {
        if (item.id === targetItem.id) {
            return { ...item, quantity: item.quantity + 1 }
        } else return item
    })
    return newCartItems
}

const deleteItemHelper = (cartItems, targetItem) => {
    const newCartItems = cartItems.filter((item) => {
        return item.id !== targetItem.id
    })
    return newCartItems
}

const decreaseItemHelper = (cartItems, targetItem) => {
    if(targetItem.quantity === 1) return deleteItemHelper(cartItems, targetItem)
    const newCartItems  = cartItems.map((item) => {
        if (item.id === targetItem.id) {
             return { ...item, quantity: item.quantity - 1 }
        } else return item
    })
    return newCartItems
}




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },

    cartItems: [],
    setCartItems: () => { },

    addItemToCart: () => { },
    removeItemFromCart: () => { },

    cartCount: 0,
    setCartCount: () => { },

    total:0,
    setTotal:()=>{},

    increaseItem: () => { },
    decreaseItem: () => { },
    deleteItem: () => { }

})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [total,setTotal] = useState(0)

    //当cartItems变化，cartCount响应变化
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, currentItem) => { return total + currentItem.quantity }, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    //当cartItems变化，total响应变化
    useEffect(() => {
        const newTotal = cartItems.reduce((total,currentItem)=>{
            return total+ currentItem.price*currentItem.quantity
        },0)
        setTotal(newTotal)
    },[cartItems])

    //用于在productCard向cart添加item
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    //用于在checkout中增加item数量
    const increaseItem = (targetItem) => {
        setCartItems(increaseItemHelper(cartItems, targetItem))
    }

    //用于在checkout中增减少item数量
    const decreaseItem = (targetItem) => {
        setCartItems(decreaseItemHelper(cartItems, targetItem))
    }

    //用于在checkout中删除item
    const deleteItem = (targetItem) => {
        setCartItems(deleteItemHelper(cartItems,targetItem))
    }




    const value = {
        isCartOpen, setIsCartOpen,

        cartItems, setCartItems,

        addItemToCart, cartCount,total,

        increaseItem, decreaseItem,deleteItem

    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

