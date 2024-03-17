import { GetDataArtist, useArtistData } from "@/context/providerCallApi";
import SearchInput from "./search-input";
import InfoOfSearch from "./info-of-search";

export default function SearchContainer() {
    return (
        <GetDataArtist>
            <div className="flex flex-col">
            <SearchInput />
            <InfoOfSearch />
            </div>
        </GetDataArtist>
    )
}