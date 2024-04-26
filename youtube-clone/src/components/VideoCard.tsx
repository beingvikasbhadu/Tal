
export function VideoCard(props:any)
{
    return(
        <div className="p-2">
            <img src={props.image} className="w-full hover:cursor-pointer rounded-md"/>
            <div className="grid grid-cols-12">
                <div className="col-span-1 pt-2 pr-2 ">
                    <img className="rounded-full" src={props.thumb}/>
                </div>
                <div className="col-span-11">
                    <div className="grid grid-rows-3">
                        <div className="row-span-1 font-base hover:cursor-pointer font-medium text-slate-800">{props.title}</div>
                        <div className="row-span-1">{props.owner}</div>
                        <div className="row-span-1 w-full">
                            {props.views} | {props.timeStamp}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}