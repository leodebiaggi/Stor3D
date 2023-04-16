import cart from './assets/cart85x85.svg'
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" class="cartClass"/>
            0
        </div>
    )
}

export default CartWidget