import { createBrowserRouter } from "react-router"
import MainLayout from "../Layouts/MainLayout"
import ErrorPage from "../Components/ErrorPage"
import Home from "../Pages/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading....</p>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
        ],
    },
])

export default router