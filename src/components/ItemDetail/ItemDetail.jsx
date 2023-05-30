import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='CardItem'>

            <picture>
                <img src={img} alt={name} className='ItemImg' id='gifImage' />
            </picture>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <section>
                <p className='Info'>Categoria: {category}</p>
                <p className='Info'>Descripción: {description}</p>
                <p className='Info'>Precio: ${price}</p>
                <p className='Info'>Stock: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
            <div className="ButtonContainer">
                <Link to="/" className="Option">Ver más productos</Link>
            </div>

        </article>
    )
}

export default ItemDetail