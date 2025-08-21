import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CardDetail from "./pages/CardDetail.jsx";


// Rutas principales del nivel 1
const router = createBrowserRouter([
{ path: "/", element: <Home /> },
{ path: "/cartas/:id", element: <CardDetail /> },
]);


export default router;
