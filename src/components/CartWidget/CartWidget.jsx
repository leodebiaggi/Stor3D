import cart from './assets/cart85x85.svg'
const CartWidget = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10}}>
            <img src={cart} alt="cart-widget"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget

