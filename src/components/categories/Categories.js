import { useEffect, useState } from "react";
import Spin from "../UI/Spin";
import CategoriesCard from "./CategoriesCard";

function Categories() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.categories);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">{loading ? <Spin /> : data.map((ele) => <CategoriesCard data={ele} />)}</div>
        </div>
    );
}
export default Categories;
