import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <h3 id='greetingIntro'>Bienvenidos a Stor3D</h3>
            <h6 id='greetingDesc'>Ademas de decorar tu hogar, podras darle vida a tus ideas con la mejor calidad y precisión.</h6>
            <h6 id='greetingDesc'>Nuestro equipo de expertos en diseño y tecnología está a tu disposición para llevar tus proyectos al siguiente nivel.</h6>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer