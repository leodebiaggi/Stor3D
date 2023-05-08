const products =[
    {id: '1', name: 'Bea', price: 5000, img: '../img/Anime/Bea.gif', stock: 10, description: 'Figura 3D Bea', category: 'anime'},
    {id: '2', name: 'Boa Hancock', price: 5000, img: '../img/Anime/BoaHancock.gif',stock: 10, description: 'Figura 3D Boa Hancock', category: 'anime'},
    {id: '3', name: 'Lisa', price: 5000, img: '../img/Anime/Lisa.gif', stock: 10, description: 'Figura 3D Lisa', category: 'anime'},
    {id: '4', name: 'Marnie', price: 5000, img: '../img/Anime/Marnie.gif', stock: 10, description: 'Figura 3D Marnie', category: 'anime'},
    {id: '5', name: 'Nessa', price: 5000, img: '../img/Anime/Nessa.gif', stock: 10, description: 'Figura 3D Nessa', category: 'anime'},
    {id: '6', name: 'Mr White', price: 5000, img: '../img/Series/MrWhite.gif', stock: 10, description: 'Figura 3D MrWhite', category: 'series'},
    {id: '7', name: 'Mike Ehrmantraut', price: 5000, img: '../img/Series/Mike.gif', stock: 15, description: 'Figura 3D Mike', category: 'series'},
    {id: '8', name: 'Gus Fring', price: 5000, img: '../img/Series/GusFaceOff.gif', stock: 25, description: 'Figura 3D Gus', category: 'series'},
    {id: '9', name: 'Héctor Salamanca', price: 5000, img: '../img/Series/Hector.gif', stock: 35, description: 'Figura 3D Hector', category: 'series'},
    {id: '10', name: 'Saul Goodman', price: 5000, img: '../img/Series/Saul.gif', stock: 20, description: 'Figura 3D Saul', category: 'series'},
    {id: '11', name: 'Colosos', price: 5000, img: '../img/Superheroes/Colosos.gif', stock: 20, description: 'Figura 3D Colosos', category: 'superheroes'},
    {id: '12', name: 'Deadpool', price: 5000, img: '../img/Superheroes/Deadpool.gif', stock: 20, description: 'Figura 3D Deadpool', category: 'superheroes'},
    {id: '13', name: 'Luthor', price: 5000, img: '../img/Superheroes/Luthor.gif', stock: 20, description: 'Figura 3D Luthor', category: 'superheroes'},
    {id: '14', name: 'Mujer Maravilla', price: 5000, img: '../img/Superheroes/MujerMaravilla.gif', stock: 20, description: 'Figura 3D Mujer Marav.', category: 'superheroes'},
    {id: '15', name: 'Superman', price: 5000, img: '../img/Superheroes/Superman.gif', stock: 20, description: 'Figura 3D Superman', category: 'superheroes'},
    {id: '16', name: 'Dibu Martinez', price: 5000, img: '../img/Personalizados/Dibu.gif', stock: 20, description: 'Figura 3D Dibu', category: 'personalizados'},
    {id: '17', name: 'Messi', price: 5000, img: '../img/Personalizados/Messi.gif', stock: 20, description: 'Figura 3D Messi', category: 'personalizados'},
    {id: '18', name: 'Joel', price: 5000, img: '../img/Personalizados/Joel.gif', stock: 20, description: 'Figura 3D Joel', category: 'personalizados'},
    {id: '19', name: 'Kratos', price: 5000, img: '../img/Personalizados/Kratos.gif', stock: 20, description: 'Figura 3D Kratos', category: 'personalizados'},
    {id: '20', name: 'Clicker', price: 5000, img: '../img/Personalizados/Clicker.gif', stock: 20, description: 'Figura 3D Clicker', category: 'personalizados'},
    {id: '21', name: 'Elefante', price: 5000, img: '../img/Deco/Elefante.jpg', stock: 20, description: 'Figura 3D Elefante', category: 'decovarios'},
    {id: '22', name: 'Gato', price: 5000, img: '../img/Deco/Gato.jpg', stock: 20, description: 'Figura 3D Gato', category: 'decovarios'},
    {id: '23', name: 'Matrimonio', price: 5000, img: '../img/Deco/Matrimonio.jpg', stock: 20, description: 'Figura 3D Matrimonio', category: 'decovarios'},
    {id: '24', name: 'Monje', price: 5000, img: '../img/Deco/Monje.jpg', stock: 20, description: 'Figura 3D Monje', category: 'decovarios'},
    {id: '25', name: 'Toro', price: 5000, img: '../img/Deco/Toro.jpg', stock: 20, description: 'Figura 3D Toro', category: 'decovarios'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === category))
        }, 500) 
    })
}