function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromCart = Function.prototype
    } = props;
    return (
        <li  className="collection-item">
            {name} x {quantity} = {price*quantity} $
            <span className="secondary-content" 
            onClick={() => removeFromCart(id)}>
                <i className="material-icons cart-item-delete">close</i>
            </span>
        </li>
    );
}
export default CartItem;