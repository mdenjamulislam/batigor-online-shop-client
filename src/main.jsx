import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Home from "./pages/Home.jsx";
import Signin from "./pages/signin.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signin",
                element: <Signin/>,
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProviders>
            <RouterProvider router={router} />
        </AuthProviders>
    </StrictMode>,
);
