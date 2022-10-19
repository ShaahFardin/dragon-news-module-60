import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagories from "../../Pages/Catagories";
import Home from "../../Pages/Home";
import News from "../../Pages/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/catagory/:id',
                element: <Catagories></Catagories>
            },
            {
                path: '/news/:id',
                element: <News></News>
            }
        ]
    }
])