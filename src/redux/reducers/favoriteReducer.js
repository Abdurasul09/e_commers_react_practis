import {ActionType} from "../ActionType/action-type";

const initialState = {
    favorite: []
}

export const FavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TO_FAVORITE:
            case ActionType.REMOVE_FROM_FAVORITE:
            return {...state, favorite: state.favorite.filter((el, id) => el.id !== action.payload)}
        default:
            return state
    }
}