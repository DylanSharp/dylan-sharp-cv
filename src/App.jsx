import {createBrowserRouter, RouterProvider, useNavigate,} from "react-router-dom";

import './App.css'
import HomePage from "./components/Home.jsx";
import {useEffect} from "react";

const Redirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/resume')
    });
    return null
}

const router = createBrowserRouter([
    {
        path: "*",
        element: <Redirect/>
    },
    {
        path: "/resume",
        element: <HomePage/>,
    }
]);

const App = () => (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
);

export default App
