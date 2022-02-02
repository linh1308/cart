import * as types from '../constants/ActionTypes';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const changeMessage = (msg) => {
    return {
        type: types.CHANGE_MESSAGE,
        msg: msg
    }
}

export const deleteProductCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_CART,
        product: product
    }
}

export const updateProductCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_CART,
        product: product,
        quantity: quantity
    }
}