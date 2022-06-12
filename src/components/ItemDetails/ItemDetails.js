import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ActionType} from "../../redux/ActionType/action-type";
import HomeLayout from "../HomeLayout";
import {getSingleProduct, removeOneProduct} from "../../redux/actions/ItemDetailsAction";
import {addToCart} from "../../redux/actions/CartAction";

const ItemDetails = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.catalog.singleItem)

    useEffect(() => {
      dispatch(getSingleProduct(params.id))
    }, [dispatch])

    return (
        <HomeLayout>
            <div className='singleProduct'>
                <div className='container'>
                    <div className='content'>
                        <div className='contentImg'>
                            <img src={singleProduct.image} alt="img" width='70px'/>
                        </div>
                        <div className='contentDescription'>
                            <h3>{singleProduct.title}</h3>
                            <span>{singleProduct.description}</span>
                            <div className='addBtnIcon'>
                                <button onClick={() => dispatch(addToCart(singleProduct))}>
                                    Add basket
                                </button>
                                <i className="fas fa-trash"
                                   onClick={() => dispatch({type: ActionType.REMOVE_ONE_PRODUCT, payload: singleProduct.id})}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default ItemDetails;