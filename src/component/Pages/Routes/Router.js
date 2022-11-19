import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import Home from "../home/Home";
import Login from "../Login/Login";
import Main from "../Main";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

        ]
    }
])
export default router;