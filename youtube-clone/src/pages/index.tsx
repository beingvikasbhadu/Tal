import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoGrid } from "@/components/VideoGrid";
import { SearchBar } from "@/components/SearchBar";
import { AppBar } from "@/components/AppBar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { VideoPlay } from "@/components/VideoPlay";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return(
    <>
    {/* <AppBar></AppBar>
    <VideoGrid></VideoGrid> */}
    <VideoPlay></VideoPlay>
    </>
  )
  
}
