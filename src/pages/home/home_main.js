import React, {useState, useRef} from "react";
import '../../styles/home.css'
import Avatar from "../../assets/avatar_neutral.riv"
import {useRive, useStateMachineInput} from "rive-react";

let Home = () => {

    //DEBUG
    const [xp, setxp] = useState(0)
    const [yp, setyp] = useState(0)

    //Used to put "ref = foo" as we can't put string ref in function component
    const ref = useRef(null);


    //Rive data
    const {RiveComponent, rive} = useRive({
        src: Avatar,
        stateMachines: "sm",
        autoplay: true
    })

    const eyeHor =
        useStateMachineInput(
            rive,
            "sm",
            "hor"
        )
    const eyeVer =
        useStateMachineInput(
            rive,
            "sm",
            "ver"
        )


    function onMouseMove(e) {

        //Get size of screen
        const heightY = ref.current.clientHeight;
        const widthX = ref.current.clientWidth;


        //GETS THE MOUSE POSITION OR CLICK POSITION IN PHONE RELATIVE TO WHOLE SCREEN
        //IF we wanted our character to be at the top and we point mouse at center of screen
        //The above values will not work as it takes the whole screen's position
        //This will cause the avatar to look straight as it thinks that the cursor is aligned to its nose-eyes-ears
        //And not look down
        const posX_Width = e.clientX;
        const posY_Height = e.clientY;


        //Getting mouse position relative to the element that has called this function
        const relative_posX_Width = posX_Width - e.target.offsetTop;
        const relative_posY_Height = posY_Height - e.target.offsetLeft;

        console.log(relative_posX_Width + "  __  " + relative_posY_Height)
        console.log(posX_Width + "  ::  " + posY_Height)

        const perX_Width = (posX_Width / widthX) * 100;
        const perY_Height = (posY_Height / heightY) * 100;

        //Normalize the  y so that the most bottom section will make Y = 0
        //Normalize the X so that the left most section will make X = 0


        eyeHor.value = perX_Width;
        eyeVer.value = perY_Height;
        setxp(perX_Width)
        setyp(perY_Height)


    }

    return (

        <div className="home" ref={ref} onMouseMove={onMouseMove}>
            <section className="avatar_buttons">
                <RiveComponent className='avatar'/>
                    <button className='btn-1'>Explore my world</button>

            </section>

        </div>


    )
}


export default Home