import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mybutton">
            <Link className="btn btn-primary btn-lg" to="/users/add">Add User</Link>
        </div>
    );
}

export default Footer;