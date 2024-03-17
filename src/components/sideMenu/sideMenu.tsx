import { BiSearch } from "react-icons/bi";
import { BiHome } from "react-icons/bi";

export default function SideMenu() {

    return (
        <div className="w-20">
            <div className="flex flex-col fixed h-full gap-3 ab ">
                <div className="w-20 h-[16%] flex flex-col justify-center items-center gap-5 rounded-lg border border-secondayColor bg-black">
                    <BiHome className="text-white brightness-75 hover:brightness-150 duration-300 cursor-pointer text-2xl" />
                    <BiSearch className="text-white brightness-75 hover:brightness-150 duration-300 cursor-pointer text-2xl" />
                </div>
                <div className="w-20 h-[79%] gradient-border-bottom rounded-lg bg-black">
                    <h1 className="text-white"></h1>
                </div>
            </div>
        </div>
    )
}