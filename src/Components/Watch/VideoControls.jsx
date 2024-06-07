import React from "react";
import ChannelInfo from "./ChannelInfo";
import ActionButtons from "./ActionButtons";

const VideoControls = ({ videoId }) => (
    <div className='flex flex-col md:flex-row justify-between md:w-full my-2'>
        <ChannelInfo videoId={videoId} />
        <ActionButtons videoId={videoId} />
    </div>
);

export default VideoControls;
