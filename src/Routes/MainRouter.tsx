import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import MainPage from "../page/MainPage";
import AllNew from "../page/AllNew";
import MainLayout from "../layouts/MainLayout";
import DetailNew from "../page/DetailNew";
import NotFound from "../page/NotFound";


const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    },
    {
        path:"/layout",
        element: <MainLayout/>,
        children: [
            {
                path: "detail/:nametype/:id",
                element: <DetailNew/>
            },
            {
                path: "homepage",
                element: <HomePage/>
            },
            {
                path: "allnewpage/:name",
                element: <AllNew/>,
            //     children:[
            //          {
            //     path: ";sportpage",
            //     element: <div>sportpage</div>
            // },
            // {
            //     path: "politics",
            //     element: <div>PoliticsPage</div>
            // },
            // {
            //     path: "darapage",
            //     element: <div>Darapage</div>
            // },
            // {
            //     path: "generalpage",
            //     element: <div>GeneralPage</div>
            // },    
            //     ]
            },
           
        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
    
    
])
export default mainRoute