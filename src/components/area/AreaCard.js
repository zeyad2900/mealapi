import { ImHome3 } from "react-icons/im";
import { Link } from "react-router-dom";

function AreaCard(props) {
    return (
        <div className="col-12 col-md-3 py-3 text-light ">
            <Link to={`/area/${props.data.strArea}`} className="text-decoration-none">
                <div className="card bg-black text-light d-flex flex-column align-items-center ">
                    <ImHome3 style={{ fontSize: "60px" }} />
                    <h1>{props.data.strArea}</h1>
                </div>
            </Link>
        </div>
    );
}
export default AreaCard;
