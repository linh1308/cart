// import * as types from '../constants/ActionTypes';

let initialState = [
    {
        id: 1,
        name: '123',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        desc: 'sssp',
        price: 450,
        inventory: 10,
        rating: 2
    },

    {
        id: 2,
        name: '123',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        desc: 'sssp',
        price: 450,
        inventory: 10,
        rating: 2
    },

    {
        id: 3,
        name: '123',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        desc: 'sssp',
        price: 450,
        inventory: 10,
        rating: 2
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}

export default products;