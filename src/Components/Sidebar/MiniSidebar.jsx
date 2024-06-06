import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { LiaDownloadSolid } from "react-icons/lia";
import { MiniSidebarnavigationItems } from "./SidebarUtils/sidebarData";

export const MiniSidebar = () => {
    const iconMap = {
        IoHomeOutline,
        SiYoutubeshorts,
        MdOutlineSubscriptions,
        ImProfile,
        LiaDownloadSolid,
    };

    return (
        <div className='sticky top-0 left-0 w-20 h-[calc(100vh-56px)] bg-black text-white flex-shrink-0'>
            {MiniSidebarnavigationItems.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                    <div
                        key={index}
                        className='px-2 py-4 flex flex-col items-center'
                    >
                        <IconComponent size='22px' />
                        <div className='text-xs mt-1'>{item.title}</div>
                    </div>
                );
            })}
        </div>
    );
};
