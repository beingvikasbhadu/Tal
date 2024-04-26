
import { timeStamp } from "console"
import { VideoCard } from "./VideoCard"
const videos=[{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png",
    views:"100K",
},
{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
},
{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}
,{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    views:"100K",
    timeStamp:"2 days ago",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}
,{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}
,{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}
,{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}
,{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}
,{
    title:"Scammed at Religious Places in India",
    ownwer:"karl Rock",
    timeStamp:"2 days ago",
    views:"100K",
    image:"https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg",
    thumb:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"
}]
export const VideoGrid=()=>{
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4">
        {videos.map(video=>{
            return <VideoCard title={video.title} owner={video.ownwer} timeStamp={video.timeStamp} image={video.image} thumb={video.thumb} views={video.views}></VideoCard>
        })}
        </div>
        </>
    )
}