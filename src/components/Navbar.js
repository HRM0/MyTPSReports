import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="navLeft">
                <div>logo</div>
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