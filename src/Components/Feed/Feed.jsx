import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import { VideoSection } from "./VideoSection";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../Slices/SidebarSlice";

export const Feed = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sidebarActions.mainSidebar());
    }, []);
    return (
        <div className='relative right-0 mt-2  w-full'>
            <ButtonList />
            <VideoSection />
        </div>
    );
};
