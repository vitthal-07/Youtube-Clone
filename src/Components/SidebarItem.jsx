import React from "react";
import Avatar from "react-avatar";

const SidebarItem = ({ icon, title, src }) => (
    <div className='flex w-[70%] mb-5 justify-between'>
        {icon ? icon : <Avatar src={src} size='25' round={true} />}
        <div className='w-[73%] text-sm truncate font-normal'>{title}</div>
    </div>
);

export default SidebarItem;
