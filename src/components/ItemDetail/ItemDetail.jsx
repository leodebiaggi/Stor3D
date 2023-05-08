import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className='CardItem'>
            
            <picture>
                <img src={img} alt={name} className='ItemImg' id='gifImage'/>
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>

        </article>
    )
}

export default ItemDetail