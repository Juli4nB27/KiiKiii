
import React, {createContext, useState } from 'react'
import Cart from '../views/Cart/Cart'


export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found
    }

    const addItem = (item, count, total) => {
        total = count * item.precio;
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
               if(prod.id === item.id){
                prod.count += count
                prod.total = prod.count * prod.price;
               }
                return prod
            }))
            :
            setItems([...items, {id: item.id, title: item.title , price: item.precio, count: count, image: item.image, desc: item.desc, total: total }])
    }

 
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
        
    }


    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems}}>
            {children}
        </CartContext.Provider>
    )
}

