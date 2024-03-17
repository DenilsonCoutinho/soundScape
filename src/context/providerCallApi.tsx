import React, { useContext, createContext, useState } from "react";

interface ArtistData {
    getArtistName: string;
    setGetArtistName: React.Dispatch<React.SetStateAction<string>>;
}

const GetNameArtist = createContext<ArtistData>({
    getArtistName: '',
    setGetArtistName: () => { }
});

export function GetDataArtist({ children }: { children: React.ReactNode }) {
    const [getArtistName, setGetArtistName] = useState<string>('');
    console.log(getArtistName)
    return (
        <GetNameArtist.Provider value={{ getArtistName, setGetArtistName }}>
            {children}
        </GetNameArtist.Provider>
    );
}

export function useArtistData() {
    return useContext(GetNameArtist);
}
