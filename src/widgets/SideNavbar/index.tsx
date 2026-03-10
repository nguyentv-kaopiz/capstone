import Image from "next/image";

export default function SideNavbar() {
    const isExpanded = true;

    return (
        <nav className="fixed left-0 top-0 w-56 h-screen bg-gray-50 shadow-md flex flex-col">
            <div className="flex relative items-center p-3">
                <Image
                    src="/logo.jpg"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="min-w-9"
                />
                <span className="font-bold text-sm text-gray-800 whitespace-nowrap">Trắc nghiệm online</span>
            </div>
            <button className="absolute w-5 h-5 bg-white rounded-full shadow-md text-xs hover:bg-gray-100 -right-2.5 top-1/2 -translate-y-1/2">
                {isExpanded ? "<" : ">"}
            </button>
        </nav>
    );
}