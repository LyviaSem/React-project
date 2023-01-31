import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Panier from "../pages/Panier/Panier";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/panier",
                    element: <Panier />
                }
            ]
        }
    ]);

    return (<RouterProvider router={router} />)
}

export default AppRouter;