import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon, title, src }) => {
    const linkMap = {
        Home: "/",
    };
    return (
        <Link
            className='flex w-[85%] space-x-6 p-2 cursor-pointer rounded-md hover:bg-zinc-700'
            to={linkMap[title]}
        >
            {icon ? icon : <Avatar src={src} size='25' round={true} />}
            <div className='w-[73%] text-sm truncate font-normal'>{title}</div>
        </Link>
    );
};

export default SidebarItem;
