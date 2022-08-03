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
            if(item.quantity == 0) {
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
            removeFromCart={removeFromCart}
            incQuantity={incQuantity}
            decQuantity={decQuantity}/>
        }
    </main>
}

export default Shop