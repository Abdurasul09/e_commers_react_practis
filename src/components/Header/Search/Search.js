import React from 'react';

const Search = () => {
    const dispatch = useDispatch();

    function searchProducts(key, value) {
        dispatch(searchPosts(value));
        dispatch(fetchPosts(value));
    }

    return (
        <div className='search'>
            <div className="container">
                <input
                    type="search"
                    placeholder="издөө..."
                    className="navbar__search"
                    onChange={(e) => searchProducts("q", e.target.value)}
                />
            </div>
        </div>
    );
};

export default Search;