import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { sidebarActions } from "../../Slices/SidebarSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Logo = () => {
    const dispatch = useDispatch();

    const handleSidebar = () => {
        dispatch(sidebarActions.toggle());
    };

    return (
        <div className='flex space-x-4 items-center w-[110px]'>
            <GiHamburgerMenu
                className='text-2xl cursor-pointer lg:block hidden'
                onClick={handleSidebar}
            />
            <Link to='/' className='w-[80px]'>
                <img
                    className='w-full h-fit'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwr4JXRyXpBBKq-Us5WzgkQ_czHSdLPkDow&s'
                    alt='Yt-Logo'
                />
            </Link>
        </div>
    );
};

export default Logo;
