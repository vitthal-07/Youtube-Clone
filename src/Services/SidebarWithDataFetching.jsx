import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchChannelsAsync,
    fetchVideosAsync,
    fetchVideosByCategoryAsync,
} from "./FetchVideos";
import { MiniSidebar } from "../Components/Sidebar/MiniSidebar";
import { Sidebar } from "../Components/Sidebar/Sidebar";

function SidebarWithDataFetching() {
    const sidebarMode = useSelector((state) => state.sidebar.mode);
    const category = useSelector((store) => store.category);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (category === "All") {
                    const fetchedVideos = await dispatch(
                        fetchVideosAsync()
                    ).unwrap();
                    const uniqueIdsMap = [
                        ...new Set(
                            fetchedVideos.map(
                                (video) => video.snippet.channelId
                            )
                        ),
                    ];
                    await dispatch(fetchChannelsAsync(uniqueIdsMap));
                } else {
                    const fetchedVideos = await dispatch(
                        fetchVideosByCategoryAsync(category)
                    ).unwrap();
                    const uniqueIdsMap = [
                        ...new Set(
                            fetchedVideos.map(
                                (video) => video.snippet.channelId
                            )
                        ),
                    ];
                    await dispatch(fetchChannelsAsync(uniqueIdsMap));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [category, dispatch]);

    const renderSidebar = () => {
        if (sidebarMode === "main") {
            return <Sidebar />;
        } else if (sidebarMode === "mini") {
            return <MiniSidebar />;
        } else {
            return null;
        }
    };

    return <div className='flex'>{renderSidebar()}</div>;
}

export default SidebarWithDataFetching;
