export default function MusicPlay(){
    async function playMusic(){
        try {
            const response = await fetch(`https://api.spotify.com/v1/tracks/5enxwA8aAbwZbf5qCHORXi`, {
                headers: {
                    Authorization: `Bearer  ${localStorage.getItem("acessToken")}`
                }
            })
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            const songData = await response.json()
            console.log(songData)
          
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="fixed  bottom-0 w-full">
        <div className=" h-20 w-full flex justify-center items-center  gradient-border-right bg-black">
        <div className="h-10 w-10 bg-white flex justify-center items-center gap-1 rounded-full">
            <div className=" w-1 h-4 bg-black"></div>
            <div className=" w-1 h-4 bg-black"></div>
        </div>
        </div>
        </div>
    )
}