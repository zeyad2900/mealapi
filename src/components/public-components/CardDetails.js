import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardDetails() {
    const [data, setData] = useState([]);
    const param = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.meals);
            });
    }, [param.id]);

    return (
        <div className="container">
            <div className="row py-5">
                {data.map((ele) => {
                    return (
                        <>
                            <div className="col-4 text-light">
                                <img className="w-100 rounded-2" alt="img" src={`${ele.strMealThumb}`} />
                                <h3>{ele.strMeal}</h3>
                            </div>
                            <div className="col-8 text-light">
                                <h2>Instructions</h2>
                                <p>{ele.strInstructions}</p>
                                <h2>Area : {ele.strArea}</h2>
                                <h2>Category : {ele.strCategory}</h2>
                                <h2>Recipes :</h2>
                                <div className="d-flex flex-wrap">
                                    {ele.strIngredient1 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure1} ${ele.strIngredient1}`}</h5> : null}
                                    {ele.strIngredient2 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure2} ${ele.strIngredient2}`}</h5> : null}
                                    {ele.strIngredient3 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure3} ${ele.strIngredient3}`}</h5> : null}
                                    {ele.strIngredient4 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure4} ${ele.strIngredient4}`}</h5> : null}
                                    {ele.strIngredient5 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure5} ${ele.strIngredient5}`}</h5> : null}
                                    {ele.strIngredient6 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure6} ${ele.strIngredient6}`}</h5> : null}
                                    {ele.strIngredient7 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure7} ${ele.strIngredient7}`}</h5> : null}
                                    {ele.strIngredient8 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure8} ${ele.strIngredient8}`}</h5> : null}
                                    {ele.strIngredient9 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure9} ${ele.strIngredient9}`}</h5> : null}
                                    {ele.strIngredient10 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure10} ${ele.strIngredient10}`}</h5> : null}
                                    {ele.strIngredient11 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure11} ${ele.strIngredient11}`}</h5> : null}
                                    {ele.strIngredient12 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure12} ${ele.strIngredient12}`}</h5> : null}
                                    {ele.strIngredient13 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure13} ${ele.strIngredient13}`}</h5> : null}
                                    {ele.strIngredient14 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure14} ${ele.strIngredient14}`}</h5> : null}
                                    {ele.strIngredient15 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure15} ${ele.strIngredient15}`}</h5> : null}
                                    {ele.strIngredient16 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure16} ${ele.strIngredient16}`}</h5> : null}
                                    {ele.strIngredient17 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure17} ${ele.strIngredient17}`}</h5> : null}
                                    {ele.strIngredient18 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure18} ${ele.strIngredient18}`}</h5> : null}
                                    {ele.strIngredient19 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure19} ${ele.strIngredient19}`}</h5> : null}
                                    {ele.strIngredient20 !== "" ? <h5 className="p-1 bg-primary rounded-2 me-2">{`${ele.strMeasure20} ${ele.strIngredient20}`}</h5> : null}
                                </div>
                                <h2>Tags :</h2>
                                <div className="d-flex ">
                                    {ele.strTags !== null &&
                                        ele.strTags.split(",").map((e) => {
                                            return <h5 className="p-1 bg-warning text-black rounded-2 me-2">{e}</h5>;
                                        })}
                                </div>
                                <div className="d-flex mt-5">
                                    <a href={ele.strSource} className="btn bg-success rounded-2 me-2">
                                        Source
                                    </a>
                                    <a href={ele.strYoutube} className="btn bg-danger p-1 rounded-2 me-2">
                                        Youtube
                                    </a>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
export default CardDetails;
