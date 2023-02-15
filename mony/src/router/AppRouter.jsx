import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Panier from "../pages/Panier/Panier";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { productsLoader } from "../pages/Products/Products";
import { platsLoader } from "../pages/Menu/Menu";
import { platLoader } from "../pages/ProductDetails/ProductDetails";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Menu from "../pages/Menu/Menu";
import Paiement from "../pages/Paiement/Paiement";
import PaiementAccepte from "../pages/PaiementAccepte/PaiementAccepte";
import Recap from "../pages/Recap/Recap"

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
                        {
                            path:"product/:idcategory/:idregime/:idplat",
                            element: <ProductDetails />,
                            loader: platLoader
                        },
                        {
                            path:"commande/:idcategory/:idregime",
                            element: <Menu />,
                            loader: platsLoader
                        },
                        {
                            path:"paiement/",
                            element: <Paiement />
                        },
                        {
                            path:"paiementaccepte/",
                            element: <PaiementAccepte />
                        },
                        {
                            path:"recapcommande/",
                            element: <Recap />
                        }
                    ]
                }
            ]
        }
    ]);

    return (<RouterProvider router={router} />)
}

export default AppRouter;