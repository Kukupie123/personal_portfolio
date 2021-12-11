import React, {useState} from "react";
import {motion} from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./style.css";
import '../../styles/neon.css'
export default function ExploreMy() {
    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
        {type: "heading1", text: "Welcome to my portfolio!"},
        {
            type: "heading2",
            text: "Explore my..."
        }
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };


    return (
        <motion.div
            className="Appp"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
        >
            <div className=" neonText flicker">
                {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index}/>;
                })}
            </div>

        </motion.div>
    );
}
