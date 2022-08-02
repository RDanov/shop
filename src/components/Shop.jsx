import {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'
import GoodsList from './GoodsList';

import Preloader from './Preloader';
import Cart from './Cart';
import CartList from './CartList';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);  

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    };

const addToCart = (item) => {
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
   
    
};

const removeFromCart = (id) => {
    const newOrder = order.filter(element => element.id !== id);
    setOrder(newOrder);

}


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        });
    }, []);


    return <main className="container content">
        <Cart quantity={order.length} 
        handleCartShow={handleCartShow}
        
        />
        {loading ? <Preloader /> : <GoodsList goods = {goods}  addToCart = {addToCart}/>}
        {
            isCartShow && <CartList order={order} 
            handleCartShow={handleCartShow}
            removeFromCart={removeFromCart}/>
        }
    </main>
}

export default Shop