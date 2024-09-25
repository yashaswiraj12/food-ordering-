import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import Grocery from "./components/Grocery";
import { lazy } from "react";
import { Suspense } from "react";
import { createBrowserRouter,  RouterProvider , Outlet} from "react-router-dom";
import { useState,useEffect } from "react";
import UserContext from "./utils/UserContext";



const AppLayout=()=>{
    
    const [username,setusername]=useState();

    useEffect(()=>{
        const data={
            name:"Yashaswi Raj"
        }
        setusername(data.name);
    },[])
    return (
        
        <UserContext.Provider value={{loggedInUser:username,setusername}}>
        <div className="app">
            <Header/>
            <Outlet/>
           
        </div>
        </UserContext.Provider>
    );
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:<Grocery/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
            }

        ],
        errorElement:<Error/>,
    }
    
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);