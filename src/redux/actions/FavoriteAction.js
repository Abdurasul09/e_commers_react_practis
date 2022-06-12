import {ActionType} from "../ActionType/action-type";

export const removeFromFavorite = (item) => {
    return {type: ActionType.REMOVE_FROM_FAVORITE, payload: item.id}
}