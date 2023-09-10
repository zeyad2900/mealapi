import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
    return (
        <div key={props.data.idMeal} className="col-12 col-md-3 py-3">
            <Link to={`/${props.data.idMeal}`}>
                <div className="meal position-relative overflow-hidden rounded-2 ">
                    <img className="w-100" alt="" src={props.data.strMealThumb} />
                    <div className="layout position-absolute d-flex align-items-center text-black p-2 ">
                        <h3>{props.data.strMeal}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default Card;
