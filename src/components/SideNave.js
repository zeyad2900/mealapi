import "./SideNave.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import logo from "../image/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
    const [navClosed, setNavClosed] = useState(true);

    const icon = () => {
        if (navClosed === false) {
            return (
                <ImCancelCircle
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={() => {
                        closeHandler();
                    }}
                />
            );
        } else {
            return (
                <FaBars
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={() => {
                        closeHandler();
                    }}
                />
            );
        }
    };

    const closeHandler = () => {
        if (navClosed === false) {
            setNavClosed(true);
        } else {
            setNavClosed(false);
        }
    };

    return (
        <div className={`nav-side ${navClosed && "close"}`}>
            <div className="left p-4">
                <div className="links">
                    <ul className={`w-100 ${navClosed && "close"}`}>
                        <li className=" w-100">
                            <Link className=" d-block w-100" to="/search">
                                Search
                            </Link>
                        </li>
                        <li className=" w-100">
                            <Link className=" d-block w-100" to="/categories">Categories</Link>
                        </li>
                        <li className=" w-100">
                            <Link className=" d-block w-100" to="/area">Area</Link>
                        </li>
                        <li className=" w-100">
                            <Link className=" d-block w-100" to="/ingredients">Ingredients</Link>
                        </li>
                        <li className=" w-100">
                            <Link className=" d-block w-100" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-footer">
                    <div className="icons">
                        <a href="/#">
                            <FaFacebook style={{ marginRight: "5px", color: "white" }} />
                        </a>
                        <a href="/#">
                            <FaTwitter style={{ marginRight: "5px", color: "white" }} />
                        </a>
                        <a href="/#">
                            <FaGlobe style={{ marginRight: "5px", color: "white" }} />
                        </a>
                    </div>
                    <div className="copy-write">
                        <p>
                            Copyright Â© 2019 All Rights
                            <br />
                            Reserved.
                        </p>
                    </div>
                </div>
            </div>
            <div className="right pt-4 pb-4">
                <img className="logo" src={logo} alt="" />
                {icon()}
                <div className="icons ds-flex">
                    <FaGlobe style={{ cursor: "pointer", marginBottom: "5px" }} />
                    <FaShareAlt style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
}

export default SideNav;
