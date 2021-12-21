import React, {useState} from "react";
import "./styles/nerdcorner.css"
import {motion} from "framer-motion";


//Components import
import SideNav from "./comp/nav/SideNav";

//redux
import {store} from "./state/redux/reduxNerdCorner";

const NerdCorner = () => {
    store.subscribe(() => {
        setIndex(store.getState().navIndex)
    });
    const [color, setColor] = useState("rgba(255, 255, 255, 0.06)");
    const [index, setIndex] = useState(0);

    return (
        <div className="bg">
            <SideNav/>
            {/*Glassmorphism container*/}
            <motion.div className="glass second-container"
                        initial={{
                            backgroundColor: color
                        }}

                        animate={{
                            backgroundColor: color
                        }}
            >
                Second container bro
            </motion.div>


        </div>
    )
}
export default NerdCorner;