import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='CartOption'>Productos</Link>
            </div>
        )
    }

    const handleRemoveItem = (itemId) => {
        removeItem(itemId);
    };

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} handleRemoveItem={handleRemoveItem}/>)}
            <h3>Total: ${total}</h3>
            <Link to='/checkout' className='CartOption'>Checkout</Link>
            <br />
            <button onClick={() => clearCart()} className='CartButton'>Vaciar carrito</button>
        </div>
    )
}

export default Cart