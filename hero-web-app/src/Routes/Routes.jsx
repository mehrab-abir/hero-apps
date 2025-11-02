import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Components/Root';
import ErrorPage from '../Components/ErrorPage'
import Home from '../Components/Home';
import Apps from '../Components/Apps';
import AppDetails from '../Components/AppDetails';
import Installation from '../Components/Installation';

const router = createBrowserRouter([
    {
        path : '/',
        Component: Root,
        errorElement : <ErrorPage />,
        children :[
            {
                index : true,
                Component: Home
            },
            {
                path : '/apps',
                Component: Apps
            },
            {
                path : '/appdetails/:id',
                Component : AppDetails
            },
            {
                path : '/installation',
                Component : Installation
            }
        ]
    }
])

export default router;