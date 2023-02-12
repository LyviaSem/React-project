import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Panier from "../pages/panier/panier";
import Home from "../pages/home/home";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { productsLoader } from "../pages/Products/Products";
import { productLoader } from "../pages/commande/commande";
import { platLoader } from "../pages/commande/commande";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Commande from "../pages/commande/commande";

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
                            element: <Home />,
                            loader: productsLoader
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
                        // {
                        //     path:"products/:id",
                        //     element: <ProductDetails />,
                        //     loader: productLoader
                        // },
                        {
                            path:"commande/:idcategory/:idregime",
                            element: <Commande />,
                            loader: platLoader
                        }
                    ]
                }
            ]
        }
    ]);

    return (<RouterProvider router={router} />)
}

export default AppRouter;