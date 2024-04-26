import { SearchBar } from "./SearchBar";

export function AppBar()
{
  return (
    
    
    //    <div className="relative grid grid-cols-12">
    //     <div className="col-span-3 m-2 absolute left-0">
    //         hello
    //     </div>
    //     <div className="col-span-6 m-2"><SearchBar></SearchBar></div>
    //     <div className="col-span-3 absolute right-0 m-2">Sign In</div>
    // </div>
    <div className="grid grid-cols-3  items-center m-2">
        <div className="" >
            <img className="h-20" src="/ytlogo.svg" alt="" />
        </div>
        <div  className=""><SearchBar></SearchBar></div>
        <div className="text-right text-">Sign In</div>

    </div>
    
  )
}