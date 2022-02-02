// import * as types from '../constants/ActionTypes';
import * as types from '../constants/ActionTypes';

let data = JSON.parse(localStorage.getItem('cart'));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, action.product);
            if (index !== -1) {
                state[index].quantity += action.quantity;
            } else {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                })
            };
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_CART:
            index = findIndex(state, action.product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_CART:
            index = findIndex(state, action.product);
            if (index !== -1) {
                state[index].quantity = action.quantity;
            };
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}

let findIndex = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++){
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            } 
        }
    }
    return index;
}

export default cart;