import React from "react";
import Avatar from "react-avatar";

const SidebarItem = ({ icon, title, src }) => (
    <div className='flex w-[85%] space-x-6 p-2 cursor-pointer rounded-md hover:bg-zinc-700'>
        {icon ? icon : <Avatar src={src} size='25' round={true} />}
        <div className='w-[73%] text-sm truncate font-normal'>{title}</div>
    </div>
);

export default SidebarItem;
