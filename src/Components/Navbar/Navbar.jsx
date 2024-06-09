import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Controls from "./Controls";

const Navbar = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    return (
        <nav className='sticky top-0 left-0 z-50 px-4 py-2 flex justify-between items-center w-full bg-black text-white'>
            {searchVisible ? (
                <Searchbar
                    setSearchVisible={setSearchVisible}
                    searchVisible={searchVisible}
                />
            ) : (
                <>
                    <Logo />

                    <Searchbar
                        setSearchVisible={setSearchVisible}
                        searchVisible={searchVisible}
                    />

                    <Controls setSearchVisible={setSearchVisible} />
                </>
            )}
        </nav>
    );
};

export default Navbar;
