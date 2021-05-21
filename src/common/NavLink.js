import React from "react";

const NavLink = ({ link, label, onClick =() => {} }) => {
    return(
        <div className="navlink">
            { label }
        </div>
    )
};

export default NavLink;