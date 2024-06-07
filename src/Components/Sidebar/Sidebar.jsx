import React from "react";
import SidebarSection from "./SidebarSection";
import {
    exploreItems,
    libraryAndHistoryItems,
    moreYoutubeItems,
    navigationItems,
    subscriptionItems,
} from "./SidebarUtils/sidebarData";

export const Sidebar = () => {
    return (
        <div className='sticky top-0 z-40 left-0 w-[15rem] h-[calc(100vh-56px)] pl-6 bg-black text-white flex-shrink-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-black'>
            <SidebarSection items={navigationItems} title='' />
            <SidebarSection items={libraryAndHistoryItems} title='You >' />
            <SidebarSection items={subscriptionItems} title='Subscription' />
            <SidebarSection items={exploreItems} title='Explore' />
            <SidebarSection
                items={moreYoutubeItems}
                title='More from YouTube'
            />
        </div>
    );
};
