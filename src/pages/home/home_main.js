import React, {useState, useRef, useEffect} from "react";
import Avatar from "../../assets/avatar_neutral.riv"
import {useRive, useStateMachineInput} from "rive-react";
import {motion} from "framer-motion";
import 'tailwindcss/tailwind.css'

//STYLES
import '../../styles/home.css'
import '../../styles/neon.css'
import '../../styles/glow.css'


let Home = () => {
    //Scrolling Data section
    const [scrollY, setScrollY] = useState(0) //Starting value is 0 and as we scroll down the value will change
    //Updates the value of scroll
    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        //Equivalent to componentDidMount
        window.addEventListener('scroll', handleScroll)
        if (eyeHor != undefined)
            eyeHor.value = 0;
        if (eyeVer != undefined)
            eyeVer.value = 0;

        //Equivalent to componentDidUnmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    //DEBUG
    // eslint-disable-next-line no-unused-vars
    const [xp, setXP] = useState(0)
    // eslint-disable-next-line no-unused-vars
    const [yp, setYP] = useState(0)

    //Used to put "ref = foo" as we can't put string ref in function component
    const ref = useRef(null);


    //Rive data
    const {RiveComponent, rive} = useRive({
        src: Avatar, stateMachines: "sm", autoplay: true
    })

    const eyeHor = useStateMachineInput(rive, "sm", "hor")
    const eyeVer = useStateMachineInput(rive, "sm", "ver")


    const onMouseMove = (e) => {
        if (e.currentTarget == undefined) return
        if (eyeVer.value == undefined || eyeHor.value == undefined) return

        //Get size of screen
        const heightY = ref.current.clientHeight;
        const widthX = ref.current.clientWidth;


        //GETS THE MOUSE POSITION OR CLICK POSITION IN PHONE RELATIVE TO WHOLE SCREEN
        //IF we wanted our character to be at the top, and we point mouse at center of screen
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
        setXP(perX_Width)
        setYP(perY_Height)


    }

    return (

        <div className="home" ref={ref} onMouseMove={onMouseMove}>


            <section className="avatar_buttons">
                <RiveComponent className='avatar'/>
                <div className="btn-container">
                    <motion.button className='btn-2 neonTextWhite flicker  '
                                   initial={
                                       {
                                           scale: 0,
                                           left: "-100vw",
                                           top: "-100vh"


                                       }
                                   }

                                   animate={{
                                       left: 0,
                                       top: 0,
                                       scale: 1
                                   }}

                                   transition={{
                                       delay: 0.51,

                                   }}
                                   whileHover={
                                       {
                                           backgroundColor: "rgba(100,0,0,0.5)",
                                           color: "pink",
                                           borderTopLeftRadius: "5px",
                                       }
                                   }
                    >Technical Side
                    </motion.button>
                    <motion.button className='btn-1 neonText subtleFlick '
                                   initial={
                                       {
                                           scale: 0,
                                           right: "-100vw",
                                           bottom: "-100vh"


                                       }
                                   }

                                   animate={{
                                       right: 0,
                                       bottom: 0,
                                       scale: 1
                                   }}

                                   transition={{
                                       delay: 0.51,

                                   }}
                                   whileHover={
                                       {
                                           backgroundColor: "rgba(0,0,0,0.5)",
                                           color: "pink",
                                           borderTopRightRadius: "5px",

                                       }
                                   }
                    >Artistic Side
                    </motion.button>
                </div>
            </section>
        </div>


    )
}


export default Home

