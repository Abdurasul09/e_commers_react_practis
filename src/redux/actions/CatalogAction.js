import axios from "axios";
import {ActionType} from "../ActionType/action-type";

export const getCatalog = () => {
    return dispatch => {
        axios('https://fakestoreapi.com/products')
            .then(({data}) => dispatch({type: ActionType.GET_CATALOG, payload: data}))

    }
}


export const addToCart = (product) => {
    return {type: ActionType.ADD_TO_CARD, payload: product}
}

export const addToFavorite = (product) => {
    return {type: ActionType.ADD_TO_FAVORITE, payload: product}
}

export const getCurrency = (data) => {
    return {type: ActionType.GET_BASED, payload: data}
}