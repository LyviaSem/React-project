import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Panier from "../pages/Panier/Panier";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { productsLoader } from "../pages/Products/Products";
import { productLoader } from "../pages/ProductDetails/ProductDetails";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        {
                            index: true,
                            element: <Home />
                        },
                        {
                            path: "/panier",
                            element: <Panier />
                        },
                        {
                           path:"/products",
                           element: <Products />,
                           loader: productsLoader 
                        },
                        {
                            path:"products/:id",
                            element: <ProductDetails />,
                            loader: productLoader
                        }
                    ]
                }
            ]
        }
    ]);

    return (<RouterProvider router={router} />)
}

export default AppRouter;