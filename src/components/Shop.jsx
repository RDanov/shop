import { useEffect, useContext } from 'react'
import { API_KEY, API_URL } from '../config'

import { ShopContext } from '../context'
import GoodsList from './GoodsList';

import Preloader from './Preloader';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

function Shop() {
    const {goods, loading, order, setGoods, isCartShow, alertName} = useContext(ShopContext)
    //const [goods, setGoods] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [order, setOrder] = useState([]);
    //const [isCartShow, setCartShow] = useState(false); 
    //const [alertName, setAlertName] = useState(''); 

    /* const handleCartShow = () => {
        setCartShow(!isCartShow);
    };

    const closeAlert = () => {
        setAlertName('');
    } */

/* const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);
    if(itemIndex < 0) {
         const newItem = {
        ...item,
        quantity: 1,
    }
    setOrder([...order, newItem])
    } else {
        const newOrder = order.map((orderItem, index) => {
            if(index ===itemIndex ) {
                return {
                    ...orderItem, 
                    quantity: orderItem.quantity + 1
                }
            } else {
                return orderItem;
            }
        });

        setOrder(newOrder);
    }
   setAlertName(item.name);
};

const removeFromCart = (id) => {
    const newOrder = order.filter(element => element.id !== id);
    setOrder(newOrder);

}

const incQuantity = (itemID) => {
    const newOrder = order.map(item => {
        if(item.id === itemID) {
            const newQuantity = item.quantity + 1;
            return {
                ...item,
                quantity: newQuantity
            }
        } else return item
    });
    setOrder(newOrder);
}

const decQuantity = (itemID) => {
    const newOrder = order.map(item => {
        if(item.id === itemID) {
            if(item.quantity === 0) {
                return item
            } else {
                const newQuantity = item.quantity - 1;
            return {
                ...item,
                quantity: newQuantity
            }
            }
            
        } else return item
    });
    setOrder(newOrder);
} */


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            data.featured && setGoods(data.featured);
        });
        //eslint-disable-next-line
    }, []);


    return <main className="container content">
        <Cart quantity={order.length} 
        //handleCartShow={handleCartShow}
        
        />
        {loading ? <Preloader /> : <GoodsList goods = {goods}  />}
        {
            isCartShow && <CartList order={order} 
          //  handleCartShow={handleCartShow}
         //   removeFromCart={removeFromCart}
         //   incQuantity={incQuantity}
          //  decQuantity={decQuantity}
          />
        }
        {
            alertName && <Alert name={alertName}
         //   closeAlert = {closeAlert}
            />
        }
    </main>
}

export default Shop