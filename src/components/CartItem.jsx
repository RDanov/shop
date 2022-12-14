import { useContext } from "react";
import { ShopContext} from '../context'

function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        /* removeFromCart = Function.prototype,
        incQuantity =  Function.prototype,
        decQuantity =  Function.prototype, */
    } = props;

const { removeFromCart, incQuantity, decQuantity} = useContext(ShopContext);

    return (
        <li  className="collection-item">
            {name} <i className="material-icons cart-icons" onClick={() => decQuantity(id)}>remove</i>
             x {quantity}{' '} <i className="material-icons cart-icons" onClick={() => incQuantity(id)}>add</i> 
             = {price*quantity} $
            <span className="secondary-content" 
            onClick={() => removeFromCart(id)}>
                <i className="material-icons cart-item-delete">close</i>
            </span>
        </li>
    );
}
export default CartItem;