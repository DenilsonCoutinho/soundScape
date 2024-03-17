import { useArtistData } from "@/context/providerCallApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchInput() {
    // const [search, setSearch] = useState('');

    let timeoutId: any
    const { setGetArtistName } = useArtistData();

    useEffect(() => {
        const inputElement: HTMLElement | null = document.getElementById('inputSearch');
        if (inputElement !== null) {
            inputElement.addEventListener('input', function (event: any) {
                console.log()
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    setGetArtistName(event.target.value)
                }, 300);

            });
        }
    }, [])

    return (
        <div className=" flex flex-col  ">
            <div className="flex  items-center rounded-xl  ">
                <div className="border-t flex justify-center items-center p-2 border-b border-l h-12 border-secondayColor rounded-l-lg bg-black">
                    <BiSearch className="text-white text-2xl" />
                </div>
                <input id="inputSearch"  type="text" placeholder="O que você procura?" className="outline-none text-sm rounded-r-lg h-12 text-white p-1 bg-black border-t border-b border-r border-secondayColor" />
            </div>

        </div >
    )
}