import {useState} from "react";

const initalState = {
    cart:[],
}

const useInitialState = () => {
    const[state, setState] = useState(initalState);
    
    const addToCart = (payload) => {
        setState ({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart:state.cart.filter(items => items.id !== payload.id)
        });
    }
    return {
        state,
        addToCart,
        removeFromCart,
    }
}

export default useInitialState;