import React from 'react';
import Cart from "./components/Cart/Cart";
import HomeLayout from "./components/HomeLayout";
const BasketPage = () => {
    return (
        <HomeLayout>
            <Cart/>
        </HomeLayout>
    );
};

export default BasketPage;