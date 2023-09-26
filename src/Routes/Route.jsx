import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home.jsx/Home";
import DonationPage from "../Pages/DonationPage";
import Error from "../Pages/Error";
import Statistics from "../Pages/Statistics";
import Donation from "../Component/Donation/Donation";

const myRoute = createBrowserRouter([
    {
        path:'/',
        element:<div>
            <MainLayout></MainLayout>,
            </div>,
            errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader:()=> fetch('/donations.json')
            },
            {
                path:'/donation',
                element:<DonationPage></DonationPage>
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donation/:id?',
                element:<Donation></Donation>,
                loader:()=> fetch('./donations.json')
            }
        ]

    }
]) 

export default myRoute;