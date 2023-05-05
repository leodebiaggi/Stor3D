const products =[
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {   id: '2', name: 'Samsung S21', price: 800, category: 'celular', img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png', stock: 20, description: 'Descripcion Samsung'},
    {   id: '3', name: 'Samsung S22', price: 1000, category: 'celular', img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png', stock: 10, description: 'Descripcion Samsung'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}