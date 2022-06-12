import './style/index.scss'
import {Routes , Route} from "react-router-dom";
import BasketPage from "./basket-page";
import Lending from "./lending";
import FavoritePage from "./favorite-page";
import ItemDetails from "./components/ItemDetails/ItemDetails";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" exact element={<Lending/>}/>
            <Route path="/:id" exact element={<ItemDetails/>}/>
            <Route path={'/basket-page'} exact element={<BasketPage/>}/>
            <Route path={'/favorite-page'} exact element={<FavoritePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
