import { useEffect, useState } from "react";
import Card from "../public-components/Card";
import Spin from "../UI/Spin";

function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
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
            <div className="row">{loading ? <Spin /> : data.map((ele) => <Card data={ele} />)}</div>
        </div>
    );
}
export default Home;
