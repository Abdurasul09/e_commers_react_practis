import React from 'react';
import HomeLayout from "./components/HomeLayout";
import {useSelector} from "react-redux";
import FavoriteCart from "./components/Favorite/FavoriteCart";

const FavoritePage = () => {
    const favorite = useSelector(s => s.favorite.favorite)
    return (
        <HomeLayout>
            <div id="favorite">
                <div className="container">
                    <span>Wishlist</span>
                    <div className="favoriteIconText">
                        <i className="far fa-heart"/>
                        <h3>My wishlist</h3>
                    </div>
                    <div className="content">
                        {favorite.map(item => <FavoriteCart item={item} key={item.id}/>)}
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default FavoritePage;