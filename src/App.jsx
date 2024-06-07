import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { MiniSidebar } from "./Components/Sidebar/MiniSidebar";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { fetchChannelsAsync, fetchVideosAsync } from "./Services/FetchVideos";

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
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchVideosAndChannels = async () => {
            const fetchedVideos = await dispatch(fetchVideosAsync()).unwrap();
            const uniqueIdsMap = [
                ...new Set(
                    fetchedVideos.map((video) => {
                        return {
                            channelId: video.snippet.channelId,
                            videoId: video.id,
                        };
                    })
                ),
            ];
            // console.log(uniqueIdsMap);
            await dispatch(fetchChannelsAsync(uniqueIdsMap));
        };

        fetchVideosAndChannels();
    }, [dispatch]);
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
