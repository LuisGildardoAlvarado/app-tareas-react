import React from "react";
import TD from '../images/TD.jpg';
import '../styles/TDLogo.css'

function TDLogo() {
    return (
    <div className="TD-logo-container">
            <img
            src={TD}
            className="TD-logo"
            alt="Logo de TribalDevs" 
            />
        </div>
    );
}

export default TDLogo