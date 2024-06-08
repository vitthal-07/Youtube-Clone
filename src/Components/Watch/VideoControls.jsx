import React from "react";
import ChannelInfo from "./ChannelInfo";
import ActionButtons from "./ActionButtons";

const VideoControls = ({ currChannel, currentVideo }) => {
    return (
        <div className='flex flex-col md:flex-row justify-between md:w-full my-2'>
            <ChannelInfo currChannel={currChannel} />
            <ActionButtons currentVideo={currentVideo} />
        </div>
    );
};

export default VideoControls;
