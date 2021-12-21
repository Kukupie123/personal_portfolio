import React from "react";
import {store} from "../../state/redux/reduxNerdCorner";
import {motion} from "framer-motion";

const Button = (prop) => {
    const index = prop.index;

    let anim = {
        fontSize: "1.8vw",
        transition: "linear"
    };

    function getCorrectStyle() {
        if (store.getState().navIndex == index) {
            anim = {fontSize: "1.8vw"};
            return "nav-buttonACTIVE";
        }
        anim = {fontSize: "1vw"};
        return "nav-button";
    }

    return (
        <motion.button
            onClick={() => {
                store.dispatch({
                    type: "changeIndex",
                    navIndex: index
                })
            }}
            className={getCorrectStyle()}
            animate={anim}

        >{prop.title}</motion.button>
    )
}
export default Button;