import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isCartShow: false,
    alertName: '',
}


export const ContextProvider = ({children}) => {

    const [value,dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };
    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})

    }

    value.incQuantity = (itemID) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: {id: itemID}})
    }

    value.decQuantity = (itemID) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: {id: itemID}})
    }

    value.removeFromCart = (itemID) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemID}});
    }

    value.handleCartShow = () => {
        dispatch({type: 'TOGGLE_CART'})
    }

    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}



export default ShopContext;