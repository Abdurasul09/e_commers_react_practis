import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Categories = ({catalog}) => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
            .then(resp => setCategories(resp.data))
    }, [])
    return (
        <div className='categories'>
            {
                categories.map((el, id) => (
                     <div key={id}>
                         <Link to='#'>{el}</Link>
                     </div>
                ))
            }
        </div>
    );

};

export default Categories;