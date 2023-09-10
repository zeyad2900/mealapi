import { useEffect, useState } from "react";
import Spin from "../UI/Spin";
import InstructionsCard from "./IngredientsCard";

function Ingredients() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            .then((res) => res.json())
            .then((data) => {
                data.meals.length = 20;
                return data.meals
            })
            .then((data) => {
                setData(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">{loading ? <Spin /> : data.map((ele) => <InstructionsCard data={ele} />)}</div>
        </div>
    );
}
export default Ingredients;
