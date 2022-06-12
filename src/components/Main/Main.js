import React, {useEffect, useState} from 'react';
import Catalog from "./Catalog/Catalog";
import Categories from "../Sidebar/Categories/Categories";
import {useDispatch, useSelector} from "react-redux";
import {getCatalog} from "../../redux/actions/CatalogAction";


const Main = () => {
    const catalog = useSelector(store => store.catalog.catalog)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)

    useEffect(() => {
        dispatch(getCatalog())

        setJobs(getCatalog())
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    // const {id, image, title} = jobs[value]
    return (
        <div id='main'>
            <div className='container'>
                <div className="row">
                    <div className='content'>
                        <Categories catalog={catalog}/>
                        <Catalog catalog={catalog}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;