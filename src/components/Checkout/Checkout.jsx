import './Checkout.css'
import { useState, useContext } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, surname, phone, email, confirmEmail }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, surname, phone, email, confirmEmail
                },
                items: cart,
                total: total,
                status: "Generada",
                date: Timestamp.fromDate(new Date())
            }

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Su pedido esta siendo generado...</h1>
    }

    if (orderId) {
        return <h2>Tu número de orden es: {orderId} </h2>
    }

    return (
        <div>
          <div className="Pedido">
            <h3>Resumen de tu compra</h3>
            {cart.map((item) => (
              <div className="ItemContainer" key={item.id}>
                <p id='itemName'>{item.name}</p>
                <p>Precio Unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            ))}
            <h4>Total a pagar: ${total}</h4>
          </div>
          <h4 className='CheckoutClass'>Checkout</h4>
          <CheckoutForm onConfirm={createOrder} />
        </div>
      )   
}

export default Checkout
