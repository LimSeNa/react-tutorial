import {Route, Routes} from "react-router-dom";
import SignUpForm from "../components/auth/SignUpForm";

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignUpForm/>}/>
        </Routes>
    );
};

export default AuthRoutes;