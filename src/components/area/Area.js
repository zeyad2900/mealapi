import { useEffect, useState } from "react";
import Spin from "../UI/Spin";
import AreaCard from "./AreaCard";

function Area() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.meals);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className="container">
            <div className="row">{loading ? <Spin /> : data.map((ele) => <AreaCard data={ele} />)}</div>
        </div>
    );
}
export default Area;