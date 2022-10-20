

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import carritoCompra from './assets/bolso.png';

function CarritoNavBar() {
    const { items } = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
      itemsInCart = itemsInCart + item.count;
    })

    return (
      <div className="App">
        <div className='itemsInCart' >
          <img className='carrito' alt='imgCarrito' src={carritoCompra} />
          {itemsInCart}
        </div>
        
      </div>
    );
  }
  
  export default CarritoNavBar;