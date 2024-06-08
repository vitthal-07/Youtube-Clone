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
    const currentVideo = videos.find(
        (video) => video.id === videoId || video.id.videoId === videoId
    );
    const currChannel = useSelector((store) =>
        currentVideo ? store.channels[currentVideo.snippet.channelId] : null
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sidebarActions.hideSidebar());
    }, []);

    return (
        <div className='py-5 mx-auto text-white w-full absolute bg-black flex flex-wrap justify-center h-[200vh]'>
            <div className='w-[90%] flex flex-wrap justify-between py-3 h-full'>
                <div className='md:w-[1070px]'>
                    <VideoPlayer videoId={videoId} />
                    <div className='text-2xl font-bold my-2'>
                        {currentVideo?.snippet?.title}
                    </div>
                    <VideoControls
                        currChannel={currChannel}
                        currentVideo={currentVideo}
                    />
                </div>
                <SidePanel />
            </div>
        </div>
    );
};
