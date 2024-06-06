import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarSection = ({ items, iconMap, title }) => (
    <div className={`${title != "" ? "border-t" : ""} mb-2 border-gray-400`}>
        {title != "" && (
            <div className='text-md font-bold p-2 mt-2 w-[85%]'>{title}</div>
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

export default SidebarSection;
