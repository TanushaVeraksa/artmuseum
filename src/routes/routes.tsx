import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Favorites from "../pages/Favorites";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <Home/>},
            {path: "favorite", element: <Favorites/>},
            {path: "detail/:id", element: <Detail/>}
        ],
    },
]);