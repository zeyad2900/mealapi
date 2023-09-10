import { Link } from "react-router-dom";
import { FaBowlFood } from "react-icons/fa6";

function InstructionsCard(props) {
    return (
        <div className="col-12 col-md-3 py-3 text-light ">
            <Link to={`/ingredients/${props.data.strIngredient.split(" ").join("_")}`} className="text-decoration-none">
                <div className="card bg-black text-light d-flex flex-column align-items-center h-100 text-center ">
                    <FaBowlFood style={{ fontSize: "60px" }} />
                    <h1>{props.data.strIngredient}</h1>
                    <p>{props.data.strDescription !== null ? props.data.strDescription.slice(0, 200) : null}</p>
                </div>
            </Link>
        </div> 
    );
}
export default InstructionsCard;
