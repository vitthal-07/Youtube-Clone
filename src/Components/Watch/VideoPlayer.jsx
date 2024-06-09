import React from "react";

const VideoPlayer = ({ videoId }) => (
    <iframe
        className='rounded-[16px] w-full h-[275px] md:h-[575px]'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=JUXCgZdiUb38sCNN`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
    ></iframe>
);

export default VideoPlayer;
