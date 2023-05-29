import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading){
        return <div className='LoadingClass'>Loading...</div>
    }

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