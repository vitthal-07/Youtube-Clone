import React from "react";
import SidebarWithDataFetching from "./Services/SidebarWithDataFetching";
import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const App = () => {
    return (
        <div className='bg-black h-fit'>
            <Navbar />
            <div className='flex'>
                <SidebarWithDataFetching />
                <Outlet />
            </div>
        </div>
    );
};
export default App;
