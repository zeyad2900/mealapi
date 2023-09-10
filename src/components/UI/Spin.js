import React from "react";
import "./Spin.css";

const Spin = () => {
    return (
        <div className="lds-roller d-flex justify-content-center align-items-center">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spin;
