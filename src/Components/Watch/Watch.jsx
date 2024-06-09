import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../Slices/SidebarSlice";
import { useSearchParams } from "react-router-dom";
import VideoControls from "./VideoControls";
import VideoPlayer from "./VideoPlayer";
import { SidePanel } from "./SidePanel";

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
        <div className='py-5 mx-auto text-white w-full absolute bg-black flex lg:flex-nowrap flex-wrap justify-center min-h-[99vh] h-fit'>
            <div className='w-[90%] flex xl:flex-nowrap flex-wrap justify-between py-3 h-fit'>
                <div className='md:w-[1070px] overflow-hidden h-fit'>
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
