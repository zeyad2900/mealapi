import { useState } from "react";
import Card from "../public-components/Card";
import Spin from "../UI/Spin";

function Search() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const searchHandler = async (e) => {
        setLoading(true); // Set loading to true before the fetch
        if (e.target.value.length !== 1) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`);
                const data = await response.json();
                setData(data.meals);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false); // Set loading to false after the fetch is complete
            }
        } else {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`);
                const data = await response.json();
                setData(data.meals);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false); // Set loading to false after the fetch is complete
            }
        }
    };

    return (
        <div className="container">
            <form className="pt-5">
                <div className="row">
                    <div className="col-12 col-md-6 me-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search By Name"
                            onChange={(e) => {
                                searchHandler(e);
                            }}
                        />
                    </div>
                    <div className=" col-12 col-md-6 ms-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search By First Letter"
                            maxLength="1"
                            onChange={(e) => {
                                searchHandler(e);
                            }}
                        />
                    </div>
                </div>
            </form>
            <div className="row">{data === null ? null : loading ? <Spin /> : data.map((ele) => <Card data={ele} />)}</div>
        </div>
    );
}
export default Search;
