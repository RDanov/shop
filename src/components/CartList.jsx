import CartItem from "./CartItem";

function CartList(props) {
    const { 
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,

        order = [], 
         
    } = props;
    
    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
    
    return (
        <ul className="collection cart-list">
        <li  className="collection-item active" >Cart</li>
        
        {
           order.length ? order.map(item => (
            <CartItem 
            key={item.id} 
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}/>
           )) : <li  className="collection-item ">Cart empty</li>
        }
        
        <li  className="collection-item active">Total { totalPrice } $ </li>
        <i 
            className="material-icons cart-close"
            onClick={ handleCartShow }
        >
            close
        </i>
      </ul>
    )

}

export default CartList;