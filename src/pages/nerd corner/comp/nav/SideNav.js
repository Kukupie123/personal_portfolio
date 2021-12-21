import React from "react";
import "../../styles/nerdcorner.css"
import NavButton from "../nav button/NavButton";
import KukuKode from "../../../../assets/kukukode2.png"

const SideNav = (prop) => {
    const i = prop.index;
    return (
        <div className="side-nav glass2">
            <img className="side-nav-logo" src={KukuKode}/>
            <NavButton title="Feed" index={0}/>
            <NavButton title="Projects" index={1}/>
            <NavButton title="Skills" index={2}/>
            <NavButton title="About me" index={3}/>
        </div>
    )
}


export default SideNav;