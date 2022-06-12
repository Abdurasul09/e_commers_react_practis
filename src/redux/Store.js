import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import ProductReducer from "./reducers/productReducer";
import {FavoriteReducer} from "./reducers/favoriteReducer";
import thunk from "redux-thunk";
import catalogReducer from "./reducers/CatalogReducer";
import CategoriesReducer from "./reducers/CatagoriesReducer";


const store = createStore(combineReducers({
    catalog: catalogReducer,
    cart: ProductReducer,
    favorite: FavoriteReducer,
    categories: CategoriesReducer,
}),composeWithDevTools(applyMiddleware(thunk)))
export default store