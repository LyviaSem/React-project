import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panier from "../pages/panier/panier";
import Home, { productsLoader } from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails, { platLoader } from "../pages/ProductDetails/ProductDetails";
import Menu, { platsLoader } from "../pages/Menu/Menu";
import Paiement from "../pages/Paiement/Paiement";
import PaiementAccepte from "../pages/PaiementAccepte/PaiementAccepte";
import Recap from "../pages/Recap/Recap"
import Header from "../Components/Header/Header"


const AppRouter = () => {
    const router = createBrowserRouter([
        {
            element: <Header />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    loader: productsLoader,
                    errorElement: <ErrorPage />,
                },
                {
                    path: "/panier",
                    element: <Panier />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/products",
                    element: <Products />,
                    loader: productsLoader,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/product/:idcategory/:idregime/:idplat",
                    element: <ProductDetails />,
                    loader: platLoader,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/commande/:idcategory/:idregime",
                    element: <Menu />,
                    loader: platsLoader,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/paiement/:total",
                    element: <Paiement />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/paiementaccepte",
                    element: <PaiementAccepte />,
                    errorElement: <ErrorPage />
                },
                {
                    path: "/recapcommande",
                    element: <Recap />,
                    errorElement: <ErrorPage />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRouter;