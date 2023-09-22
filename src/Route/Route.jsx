import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../Layouts/MainLaout/MainLaout";
import Home from "../pages/Home/Home";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import Blog from "../pages/Blog/Blog";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLaout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/appliedJobs",
                element:<AppliedJobs/>
            },
            {
                path:"/blog",
                element:<Blog/>
            }
        ]
    }
])
export default Route