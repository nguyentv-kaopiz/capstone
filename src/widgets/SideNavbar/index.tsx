'client';

import Image from "next/image";
import {useState} from "react";
import { menu_items } from "./menuItem";
import { Role } from "@/src/shared/config/roles";


export default function SideNavbar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [activeItem, setActiveItem] = useState(1);

    const role = Role.Teacher;

    const filteredMenuItems = menu_items.find(menu => menu.role === role)?.items || [];

    const handleExpand = () => {
        setIsExpanded(prev => !prev);
    }
    
    const handleItemClick = (id: number) => {
        setActiveItem(id);
    }

    return (
        <nav className={`fixed left-0 top-0 h-screen bg-gray-50 shadow-md flex flex-col ${isExpanded ? 'w-56' : 'w-16'} transition-all duration-300 ease-in-out`}>
            <div className="flex relative items-center p-3">
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="min-w-9"
                />
                <div className={`ml-2 ${isExpanded ? 'w-32 opacity-100' : 'w-0 opacity-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
                    <span className="font-bold text-sm text-gray-800 whitespace-nowrap">Trắc nghiệm online</span>
                </div>
                <button onClick={handleExpand} className="absolute w-5 h-5 bg-white rounded-full shadow-md text-xs hover:bg-gray-100 -right-2.5 top-1/2 -translate-y-1/2">
                    {isExpanded ? "<" : ">"}
                </button>
            </div>
            <div className="flex flex-col flex-1 p-2 mt-3 space-y-1">
                {filteredMenuItems.map((item) => (
                    <button key={item.id} onClick={() => handleItemClick(item.id)} className={`flex items-center justify-center h-12 rounded-lg ${!isExpanded ? 'px-2' : 'px-3'} ${activeItem === item.id ? 'text-blue-600 border-blue-500' : 'text-gray-700 hover:bg-white'}`}>
                        <div className="flex items-center justify-center w-9 relative z-10">
                            {item.icon({ className: "text-lg" })}
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out relative z-10 text-left ${isExpanded ? 'w-32 opacity-100 ml-2' : 'w-0 opacity-0'}`}>
                            <span className="whitespace-nowrap text-sm">{item.text}</span>
                        </div>
                    </button>
                ))}
            </div>
        </nav>
    );
}