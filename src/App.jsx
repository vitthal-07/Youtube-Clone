import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { MiniSidebar } from "./Components/Sidebar/MiniSidebar";
import { Sidebar } from "./Components/Sidebar/Sidebar";

function App() {
    const sidebarMode = useSelector((state) => state.sidebar.mode);

    const renderSidebar = () => {
        if (sidebarMode === "main") {
            return <Sidebar />;
        } else if (sidebarMode === "mini") {
            return <MiniSidebar />;
        } else {
            return null;
        }
    };

    return (
        <div className='bg-black w-full h-screen flex flex-col'>
            <Navbar />
            <div className='flex overflow-x-hidden w-[99vw] '>
                {renderSidebar()}
                <Outlet />
            </div>
        </div>
    );
}

export default App;
