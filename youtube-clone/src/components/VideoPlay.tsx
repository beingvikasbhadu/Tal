import { VideoPlayCard } from "./VideoPlayCard"
import { ListOfRecomend } from "./ListOfRecomend"
export const VideoPlay=()=>{
    return(
        <>
           <div className="grid grid-cols-10">
            <div className="col-span-6 m-2">
                    <VideoPlayCard/>
            </div>
            <div className="col-span-4">
                <ListOfRecomend></ListOfRecomend>
            </div>
           </div>
        </>
    )
}