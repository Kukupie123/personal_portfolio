import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./pages/home/home_main";
import NerdCorner from "./pages/nerd corner/Nerd_Corner";
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render
(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nerd_corner" element={<NerdCorner/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)