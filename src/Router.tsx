import { createBrowserRouter } from "react-router-dom";
import ProductList from "./Component/ProductList";
import ProductDetail from "./Component/ProductDetail";
import InfinityScroll from "./utills/observerApiHook/InfinityScroll";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <ProductList />, 
    },
    {
        path: "/product/:id",
        element: <ProductDetail />,
    },
    // {
    //     path: "/infinity",
    //     element: ,
    // }
]);

export default Router;