import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../redux/actions/CartAction";
import {removeFromFavorite} from "../../redux/actions/FavoriteAction";

const FavoriteCart = ({item}) => {
    const {based} = useSelector(state => state.catalog)
    const dispatch = useDispatch()

    const currency = {
        USD: "$",
        RUB: "₽",
        SOM: "KGS",
        EUR: "€"
    }
    console.log(item)
    return (
        <div>
            <div className='favoriteItemBox' key={item.id}>
                <div className='firstBox'>
                    <Link to={`/${item.id}`}>
                        <img src={item.image} alt="img" className='px-lg-3'/>
                    </Link>
                </div>
                <div className='secondBox'>
                    <h4>{item.category}</h4>
                    <span>{currency[based]}{item.price}</span>
                </div>
                <div className='d-flex justify-content-around mt-2'>
                    <button
                        className='btn btn-dark'
                        onClick={() => dispatch(addToCart(item))}
                    >
                        Add to cart
                    </button>
                    <i className="fas fa-trash fs-2 py-1"
                       onClick={() => dispatch(removeFromFavorite(item))}
                    >
                    </i>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCart;