import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart} from "../../../redux/actions/CartAction";
import {addToFavorite} from "../../../redux/actions/CatalogAction";


const Product = ({product}) => {
    const dispatch = useDispatch()
    const {rates, based} = useSelector(state => state.catalog)

    const currency = {
        USD: "$",
        RUB: "₽",
        SOM: "KGS",
        EUR: "€"
    }

    return (
        <div className='box'>
            <Link to={`/${product.id}`}>
                <img src={product.image} alt="img"/>
            </Link>

            <div className='categoryPrice d-flex justify-content-center'>
                <span className='category'>{product.category}</span>
            </div>
            <span className='price d-flex justify-content-center my-2'>
                   {currency[based]}{(product.price * rates[based]).toFixed(2)}
            </span>
            <div className='addBtn'>
                <button onClick={() => dispatch(addToCart(product))}>
                    Add basket
                </button>
                <button onClick={() => dispatch(addToFavorite(product))}>
                    add
                </button>
            </div>
        </div>
    );
};

export default Product;