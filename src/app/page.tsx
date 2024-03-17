"use client"
import { useEffect, useState } from "react";

import SearchContainer from "@/components/search/search-container";
import SideMenu from "../components/sideMenu/sideMenu";
import MusicPlay from "@/components/musicPlay/music-play";

export default function Home() {
  
  const CLIENT_ID = "bc53a114a8dc436dbf2bac0c178b112c"
  const CLIENT_SECRET = "ebea13f7b32f44a6961c6395f3ed2dc4"

  async function GetAcessToken() {
    if (localStorage.getItem("acessToken")) {
      console.log('sipaá aqui')
      return
    } else {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
      })
      let  token = await response.json();
      if (token !== undefined) {
        localStorage.setItem("acessToken", token.access_token)
      } else {
        console.error('O token está vazio ou null.');
      }
    }
  }

  useEffect(() => {
    GetAcessToken()
  }, [])
  return (
    <main className="h-screen overflow-hidden overflow-y-auto relative flex p-4 gap-5">
      <SideMenu />
      <SearchContainer />
      <MusicPlay />
    </main>
  );
}
