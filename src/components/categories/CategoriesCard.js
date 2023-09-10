import { Link } from "react-router-dom";

function CategoriesCard(props) {
    return (
        <div className="col-12 col-md-3 py-3">
            <Link to={`/categories/${props.data.strCategory}`}>
                <div className="meal position-relative overflow-hidden rounded-2 ">
                    <img className="w-100" alt="" src={props.data.strCategoryThumb} />
                    <div className="layout overflow-hidden position-absolute d-flex align-items-center text-black p-2 flex-column">
                        <h3>{props.data.strCategory}</h3>
                        <p>{props.data.strCategoryDescription.slice(0, 200)}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default CategoriesCard;
