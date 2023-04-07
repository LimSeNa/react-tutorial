import React from "react";
import Homepage from "./pages/Homepage";
import Lecturepage from "./pages/Lecturepage";
import Postpage from "./pages/Postpage";
import Authpage from "./pages/Authpage";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/lectures" element={<Lecturepage/>}/>
                <Route path="/posts" element={<Postpage/>}/>
                <Route path="/auth/*" element={<Authpage/>}/>
            </Routes>
        </>
    );
};

export default App;