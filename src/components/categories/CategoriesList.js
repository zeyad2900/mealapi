import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spin from "../UI/Spin";
import Card from "../public-components/Card";

function CategoriesList() {
    const param = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.catName}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.meals);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [param.catName]);
    return (
        <div className="container">
            <div className="row">{loading ? <Spin /> : data.map((ele) => <Card data={ele} />)}</div>
        </div>
    );
}
export default CategoriesList;
