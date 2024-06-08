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
        <div className='flex flex-col flex-grow items-center w-full overflow-hidden'>
            <div className='w-full'>
                <ButtonList />
            </div>
            <div className='w-full overflow-hidden'>
                <VideoSection />
            </div>
        </div>
    );
};
