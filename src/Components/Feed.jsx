import React from "react";
import { ButtonList } from "./ButtonList";
import { VideoContainer } from "./VideoContainer";

export const Feed = () => {
    return (
        <div className='mt-2'>
            <ButtonList />
            <VideoContainer />
        </div>
    );
};
