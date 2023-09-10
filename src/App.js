import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideNav from "./components/SideNave";
import Search from "./components/search/Search";
import Home from "./components/home/Home";
import CardDetails from "./components/public-components/CardDetails";
import Categories from "./components/categories/Categories";
import CategoriesList from "./components/categories/CategoriesList";
import Area from "./components/area/Area";
import AreaList from "./components/area/AreaList";
import Ingredients from "./components/Ingredients/Ingredients";
import IngredientsList from "./components/Ingredients/ingredientsList";
import ContactUs from "./components/Contactus/ContactUs";

function App() {
    return (
        <div className="app">
            <SideNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:catName" element={<CategoriesList />} />
                <Route path="/area" element={<Area />} />
                <Route path="/area/:areaName" element={<AreaList />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/ingredients/:ingName" element={<IngredientsList />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/:id" element={<CardDetails />} />
            </Routes>
        </div>
    );
}

export default App;
