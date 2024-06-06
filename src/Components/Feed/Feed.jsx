import React from "react";
import ButtonList from "./ButtonList";
import { VideoSection } from "./VideoSection";

export const Feed = () => {
    return (
        <div className='relative right-0 mt-2 mr-2 h-[200vh] w-full'>
            <ButtonList />
            <VideoSection />
        </div>
    );
};
