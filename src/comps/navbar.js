import React from "react";
import Logo from "../assets/logo.png"
import '../styles/Navbar.css'
//Function name needs to be capital or else They will be considered
//A part of html and jsx tags
let Nav = () => {
    return (
        <div className="NavBar">
            {/*Left side of the nav bar showing the logo and stuff*/}
            <div className="LeftSide">
                <img src={Logo}/>
            </div>

            <div className="RightSide"></div>

        </div>
    )
};
//Default export is going to be Nav function
export default Nav