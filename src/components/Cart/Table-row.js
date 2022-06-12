import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ActionType} from "../../redux/ActionType/action-type";
import {addToCart, decFromCart, removeFromCart} from "../../redux/actions/CartAction";

const TableRow = ({item, id}) => {

    const {cart} = useSelector(state => state.cart)
    const {rates, based} = useSelector(state => state.catalog)

    const totalPrice = cart.reduce((acc, el) => {
        return el.quantity * rates[based] * el.price + acc
    }, 0)


    const currency = {
        USD: "$",
        RUB: "₽",
        SOM: "KGS",
        EUR: "€"
    }



    const dispatch = useDispatch()
    return (
        <tr>
            <td>
                <img src={item.image} alt="img" width="70px" className='bg-transparent'/>
            </td>
            <td className='py-5'>{item.title}</td>
            <td className='py-5'>
                {currency[based]}{(item.price * item.quantity * rates[based]).toFixed(2)}
            </td>
            <td className='py-5'>
                <button disabled={item.quantity === 1}
                        className='btn btn-dark mx-3 fs-5'
                        onClick={() => dispatch(decFromCart(id))}
                >
                    -
                </button>

                {item.quantity}

                <button
                    className='btn btn-primary mx-3 fs-5'
                    onClick={() => dispatch(addToCart(item))}
                >
                    +
                </button>
            </td>

            <td className='py-5'>
                <button
                    className='btn btn-secondary'
                    onClick={() => dispatch(removeFromCart(item))}
                >Delete
                </button>
            </td>
        </tr>
    );
};

export default TableRow;