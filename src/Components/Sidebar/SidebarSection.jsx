import React from "react";
import SidebarItem from "./SidebarItem";

import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaHistory } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

export default function SidebarSection({ items, title }) {
    const iconMap = {
        IoHomeOutline,
        SiYoutubeshorts,
        MdOutlineSubscriptions,
        ImProfile,
        FaHistory,
        AiOutlineLike,
        LiaDownloadSolid,
        MdPlaylistPlay,
        MdOutlineVideoSettings,
        FaRegClock,
    };
    return (
        <div
            className={`${title != "" ? "border-t" : ""} mb-2 border-gray-400`}
        >
            {title != "" && (
                <div className='text-md font-bold p-2 mt-2 w-[85%]'>
                    {title}
                </div>
            )}
            {items.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                    <SidebarItem
                        key={index}
                        icon={
                            IconComponent ? (
                                <IconComponent size='22px' />
                            ) : undefined
                        }
                        src={item.src}
                        title={item.title}
                    />
                );
            })}
        </div>
    );
}
