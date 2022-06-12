import React from 'react';
import logo from '../../images/arlogo.png'
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import {useDispatch, useSelector} from "react-redux";
import {getCurrency} from "../../redux/actions/CatalogAction";
import {ActionType} from "../../redux/ActionType/action-type";

const Header = () => {
    const dispatch = useDispatch()
    const cart = useSelector(s => s.cart)
    const favorite = useSelector(f => f.favorite)

    return (
        <section id='header'>
            <div className="container">
                <nav className='navigation'>
                    <div className="firstContent">
                        <img src={logo} alt="logo"/>
                        <div className="links">
                            <Link to="/">Home</Link>
                            <Link to='/basket-page'>Basket</Link>
                            <Link to='/favorite-page'>Favorite</Link>
                        </div>
                    </div>
                    <Form.Select
                        className='form'
                        onChange={(e) =>
                            dispatch(getCurrency(e.target.value))}>
                        <option value='USD'>$</option>
                        <option value="RUB">₽</option>
                        <option value="SOM">KGS</option>
                        <option value="EUR">€</option>
                    </Form.Select>

                    <Form.Select
                        className='form'
                        onChange={(e) =>
                            dispatch({type: ActionType.SORT_CATALOG, payload: e.target.value})} >
                        <option value='a-z'>A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </Form.Select>

                    <div className='headerIcons'>
                        <div className='shopIcon'>
                            <Link to='/basket-page'>
                                <i className="fas fa-shopping-bag"/>
                            </Link>
                            <span className={`circle-cart text-center ${cart.cart.length ? "d-block" : "d-none"}`}>
                                {cart.cart.length}
                            </span>
                        </div>
                        <div className='likeIcon'>
                            <Link to='/favorite-page'><i className="far fa-heart"/></Link>
                            <span
                                className={`circle-favorite text-center ${favorite.favorite.length ? "d-block" : "d-none"}`}>
                                {favorite.favorite.length}
                            </span>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between search'>
                        <input type="text" placeholder='Search'/>
                        <button>Search</button>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;