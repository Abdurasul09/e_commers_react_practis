import React, {useEffect} from 'react';
import Product from "./Product";
import {useDispatch, useSelector} from "react-redux";
// import {getCatalog} from "../../../redux/actions/CatalogAction";


const Catalog = ({catalog}) => {
    console.log(catalog)
    // const catalog = useSelector(store => store.catalog.catalog)
    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(getCatalog())
    // }, [])

    return (
        <div id='Catalog'>
            <div className="container">
                <div className="row">
                    <div className="contents">
                        {
                            catalog.map(item => (
                                <Product product={item} key={item.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;