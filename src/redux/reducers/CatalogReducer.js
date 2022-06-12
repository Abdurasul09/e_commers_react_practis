import {ActionType} from "../ActionType/action-type";

const initialState = {
    catalog: [],
    based: "USD",
    singleItem: [],
    rates: {
        USD: 0.13,
        RUB: 1,
        EUR: 0.011,
        SOM: 1.07
    },
}


const CatalogReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionType.GET_CATALOG:
            return {...state, catalog: action.payload}
        case ActionType.GET_ONE_PRODUCT:
            return {...state, singleItem: action.payload}
        case ActionType.GET_BASED:
            return {...state, based: action.payload}
        case ActionType.REMOVE_ONE_PRODUCT:
            return {...state, singleItem: state.singleItem.filter((el, id) => el.id !== action.payload)}

        case ActionType.SORT_CATALOG:
            const newCatalog = [...state.catalog]
            console.log(newCatalog)
            if(action.payload === "a-z"){
                newCatalog.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
            } else if(action.payload === "z-a"){
                newCatalog.sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1)
            }else if(action.payload === 'lowest'){
                newCatalog.sort((a,b) => a.price - b.price)
            }else if(action.payload === 'highest'){
                newCatalog.sort((a,b) => b.price - a.price)
            }
            return {...state, catalog: [...newCatalog]}
        default:
            return state


    }
}
export default CatalogReducer