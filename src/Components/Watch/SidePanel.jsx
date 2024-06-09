import React from "react";
import { LiveChat } from "./LiveChat";

export const SidePanel = () => {
    return (
        <div className='w-[425px] md:mx-0 mx-auto text-white items-center flex flex-col'>
            <LiveChat />
        </div>
    );
};
