import Link from "next/link";
import Image from "next/image";
import logo from "@/public/narutoLogo.png";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects",
    },
    {
        name: "Blogs",
        href: "/blogs",
    },
    {
        name: "Skills",
        href: "/skills",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    },
]
const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-72 h-full px-4 pt-8 border-r border-gray-200">
        <div className="flex items-center gap-4 py-4">
            <Image 
                src={logo} 
                alt="logo" 
                width={60} 
                height={60} 
                className="rounded-full"
            />
            <div>
                <h1 className="text-lg font-bold">Ashutosh Sagar</h1>
                <p className="text-md text-gray-500">Software Developer</p>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    className="text-gray-500 hover:text-gray-700 border border-gray-200 rounded-lg px-3 py-3"
                >
                    {item.name}
                </Link>
            ))}
        </div>
        <div className="flex flex-col gap-2 absolute bottom-0 left-0 w-full p-4">
            <h1 className="">Available Now</h1>
            <button className="rounded-lg px-3 py-3 bg-[#4378E5] text-white w-full">Hire Me</button>
        </div>
    </div>
  )
}

export default Sidebar