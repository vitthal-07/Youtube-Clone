import React from "react";
import ChannelInfo from "./ChannelInfo";
import ActionButtons from "./ActionButtons";

const VideoControls = ({ videoId }) => (
    <div className='flex justify-between flex-wrap w-full my-2'>
        <ChannelInfo videoId={videoId} />
        <ActionButtons videoId={videoId} />
    </div>
);

export default VideoControls;
