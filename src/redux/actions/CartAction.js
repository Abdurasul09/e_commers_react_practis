import {ActionType} from "../ActionType/action-type";

export const  addToCart = (item) => {
    return {type: ActionType.ADD_TO_CARD, payload: item}
}


export const decFromCart = (id) => {
    return {type: ActionType.DEC_FROM_CART, payload: id}
}

export const removeFromCart = (item) => {
    return {type: ActionType.REMOVE_FROM_CARD, payload: item.id}
}
