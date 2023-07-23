import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="navLeft">
                <img src="logo.png" alt="Company Logo" />
            </div>
            <div className="navRight">
                <a>Home</a>
                <a>Profile</a>
                <a>Log in</a>
            </div>
        </nav>
    )
}

export default Navbar