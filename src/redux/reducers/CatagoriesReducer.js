import {ActionType} from "../ActionType/action-type";

const initialState = {
    categories: []
}


const CategoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionType.GET_CATEGORIES:
            return {...state, categories: action.payload}
        default:
            return state
    }
}

export  default CategoriesReducer;