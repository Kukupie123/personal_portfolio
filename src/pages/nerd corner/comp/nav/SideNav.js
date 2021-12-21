import React from "react";
import "../../styles/nerdcorner.css"
import NavButton from "../nav button/NavButton";
import KukuKode from "../../../../assets/kukukode2.png"
const SideNav = () => {
    return (
        <div className="side-nav glass2">
            <img className="side-nav-logo" src={KukuKode}/>
            <NavButton title="Feed"/>
            <NavButton title="Projects"/>
            <NavButton title="Skills"/>
            <NavButton title="About me"/>
        </div>
    )
}

export default SideNav;