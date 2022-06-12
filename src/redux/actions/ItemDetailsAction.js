import axios from "axios";
import {ActionType} from "../ActionType/action-type";

export const getSingleProduct = (id) => {
    try{
        return dispatch => {
            axios()
                .then(({data}) => dispatch({type: ActionType.GET_ONE_PRODUCT, payload: data}))
        }
    } catch (e){
        console.log(e)
    }
}

export const addToCart = (singleProduct) => {
    return {type: ActionType.ADD_TO_CARD, payload: singleProduct}
}

// export const removeOneProduct = (singleProduct) => {
//     return {type: ActionType.REMOVE_ONE_PRODUCT, payload: singleProduct.id}
// }
