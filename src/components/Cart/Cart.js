import React from 'react';
import {useSelector} from "react-redux";
import TableRow from "./Table-row";

const Cart = () => {
    const {cart} = useSelector(state => state.cart)
    const {rates, based} = useSelector(state => state.catalog)
    const totalPrice = cart.reduce((acc, el) => {
        return el.quantity * el.price + acc
    }, 0)

    console.log(cart)

     const currency = {
        USD: "$",
        RUB: "₽",
        SOM: "KGS",
        EUR: "€"
    }



    return (
        <section id='cart'>
            <div className='container'>
                <h1>Shopping Cart</h1>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        {
                            cart.length === 0 ? <h2>Карзина пуста!</h2> :
                                <table className='table table-hover'>
                                    <thead className='text-white text-dark text-center bg-dark'>
                                    <tr>
                                        <th scope="col">IMAGE</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">DELETE</th>
                                    </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                    {
                                        cart.map((item, id) => (
                                            <TableRow item={item} id={id} key={item.id}/>
                                        ))
                                    }
                                    <tr>
                                        <td colSpan={6}>
                                            <h4 className='mt-3'>
                                                <span className='mx-2'>
                                                    Total price:
                                                </span>
                                                {currency[based]}
                                                {(totalPrice * rates[based]).toFixed(2)}
                                            </h4>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;