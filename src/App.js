import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Winners from "./pages/Winners";
import {createHashRouter, RouterProvider} from "react-router-dom";
import Winner from "./pages/Winner";

const router = createHashRouter([
    {
        path: "/",
        element: <><Header/><Home/></>
    },
    {
        path: "/winners",
        element: <><Header/><Winners/></>
    },
    {
        path: "/:id",
        element: <><Header/><Winner/></>
    }
])

function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
