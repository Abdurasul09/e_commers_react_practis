import React, {useEffect, useState} from 'react';
import axios from "axios";

const Jewelery = () => {
    const [jewelery, setJewelery] = useState({})
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/jewelery')
            .then(resp => console.log(resp))
    }, [])

    return (
        <div>

        </div>
    );
};

export default Jewelery;