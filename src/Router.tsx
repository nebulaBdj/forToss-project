import { createBrowserRouter } from "react-router-dom";
import BlogList from "./Component/BlogList";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <BlogList />, 
    }
]);

export default Router;