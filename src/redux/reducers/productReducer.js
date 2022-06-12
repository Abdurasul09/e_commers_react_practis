import React from 'react';
import {ActionType} from "../ActionType/action-type";
const initialState = {
    cart: [],
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_CARD:
            const findProduct = state.cart.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {...state, cart: state.cart.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el)
                }
            }

            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}


        case ActionType.REMOVE_FROM_CARD:
            return {...state, cart: state.cart.filter((el, id) => el.id !== action.payload)}

        case ActionType.DEC_FROM_CART:
            if (state.cart [action.payload].quantity > 0)
                return {
                    ...state, cart: state.cart.map((el, id) => id === action.payload ?
                        {
                            ...el,
                            quantity: el.quantity - 1
                        } : el)
                }
        default:
            return state
    }
};

export default ProductReducer;