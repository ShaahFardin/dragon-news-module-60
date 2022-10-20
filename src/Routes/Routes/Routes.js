import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Catagories from "../../Pages/Catagories";
import Home from "../../Pages/Home";
import News from "../../Pages/News";
import Summary from "../../Pages/Shared/Summary";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: ({ params }) => fetch("http://localhost:5000/news"),
        element: <Home></Home>,
      },
      {
        path: "/catagory/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagory/${params.id}`),
        element: <Catagories></Catagories>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element:<Summary></Summary>,
      },
    ],
  },
]);