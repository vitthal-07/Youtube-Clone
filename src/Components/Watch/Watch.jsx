import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../Slices/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import VideoControls from "./VideoControls";
import VideoPlayer from "./VideoPlayer";
import { SidePanel } from "./SidePanel";

const formatSubscriberCount = (count) => {
    if (count > 1000000) {
        return `${Math.floor(count / 1000000)}M subscribers`;
    } else if (count > 1000) {
        return `${Math.floor(count / 1000)}K subscribers`;
    }
    return `${count} subscribers`;
};
const formatLikeCount = (count) => {
    if (count > 1000000) {
        return `${Math.floor(count / 1000000)}M`;
    } else if (count > 1000) {
        return `${Math.floor(count / 1000)}K`;
    }
    return `${count}`;
};
export const Watch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const videos = useSelector((store) => store.videos);
    const channels = useSelector((store) => store.channels);
    const currentChannel = channels[videoId];
    const currentVideo = videos.find((video) => video.id === videoId);
    console.log(currentVideo);
    console.log(currentChannel);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sidebarActions.hideSidebar());
    }, []);

    return (
        <div className='py-5 mx-auto text-white w-full absolute flex flex-wrap justify-center h-fit'>
            <div className='w-[89%] flex flex-wrap justify-between py-3'>
                <div className='w-[1070px]'>
                    <VideoPlayer videoId={videoId} />
                    <div className='text-2xl font-bold my-2'>
                        {currentVideo?.snippet?.title}
                    </div>
                    <VideoControls videoId={videoId} />
                </div>
                <SidePanel />
            </div>
        </div>
    );
};