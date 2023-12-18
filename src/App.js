import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Winners from "./pages/Winners";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Winner from "./pages/Winner";
import {useTranslation} from "react-i18next";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/winners",
        element: <Winners/>
    },
    {
        path: "/:id",
        element: <Winner/>
    }
])

function App() {

    return (
        <>
            <Header/>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
