import { useArtistData } from "@/context/providerCallApi";
import { useEffect, useState } from "react";

export default function InfoOfSearch() {
    const [categories, setcategories] = useState<any>();
    const [data, setGetData] = useState<string | any>();
    const [loading, setLoading] = useState(false);
    const { getArtistName } = useArtistData();

    async function getCategories() {
        try {
            const response = await fetch(`https://api.spotify.com/v1/browse/categories?limit=40`, {
                headers: {
                    Authorization: `Bearer  ${localStorage.getItem("acessToken")}`
                }
            })
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            const artistData = await response.json()
            return setcategories(artistData)
        } catch (error) {
            console.log(error)
        }
    }
    async function getArtist() {
        setLoading(true)
        try {
            if (getArtistName === "") return
            console.log('getArtist');
            const response = await fetch(` https://api.spotify.com/v1/search?q=${getArtistName.trim()}&type=artist`, {
                headers: {
                    Authorization: `Bearer  ${localStorage.getItem("acessToken")}`
                }
            })
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            const artistData = await response.json()
            setGetData(artistData)
            console.log("aqui", artistData)
            return
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        getArtist()
    }, [getArtistName])

    useEffect(() => {
        getCategories()
    }, [])
    return (
        <>
            {
                getArtistName === "" ?
                    <div className="grid grid-cols-4 gap-2 scrollDefault overflow-y-auto h-[34rem] mt-2">
                        {
                            categories?.categories?.items?.map((props: any) => {

                                return <div className="">
                                    <div style={{
                                        backgroundImage: `url(${props.icons[0]?.url})`,
                                        width: '200px',
                                        height: '200px',
                                        backgroundPosition: 'center'
                                    }}>
                                        <h1 className="text-white font-bold text-xl">{props.name}</h1>
                                    </div>
                                </div>
                            })

                        }
                    </div>
                    :
                    <div className="grid  grid-cols-4 gap-2  overflow-y-auto  h-[34rem]  mt-2">
                        {
                            data?.artists?.items?.map((props: any, index: number) => {
                                const imageUrl = props.images[0]?.url
                                return imageUrl ?
                                    <div className=""
                                        style={{
                                            backgroundImage: `url(${imageUrl})`,
                                            width: '200px',
                                            height: '200px',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }}
                                    ></div>
                                    :
                                    <div className=" hidden"></div>
                            })
                        }

                    </div>
            }
        </>
    )
}