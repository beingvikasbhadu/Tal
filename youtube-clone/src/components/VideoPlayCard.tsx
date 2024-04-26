export const VideoPlayCard=()=>{
    return(
        <div>
            <img className="rounded-md w-full" src="https://img.youtube.com/vi/8wpDeaFi4FI/sddefault.jpg"></img>
            <div className="grid grid-rows-3">
                <div className="row-span-1 font-base hover:cursor-pointer font-medium text-slate-800 h-auto">Survive 100 Days Trapped, Win $500,000</div>
                <div className="row-span-2 flex justify-between">
                    <div className="flex justify-between items-center">
                        <div className="m-1">
                        <img  className="rounded-full h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/1200px-T-series-logo.svg.png"/>
                        </div>
                         <div className="m-1">MR.Beast</div>
                         <div className="m-1"><button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Join</button></div>
                         <div className="m-1"><button type="button" className="text-white bg-black from-black-500 to-black-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Subscribe</button></div>
                       
                    </div>
                    <div className="flex justify-between mr-">
                        <div className="m-2 ">
                            <div className=" items-center inline-flex border border-gray-200 rounded-full p-0.5">
                                <button type="button" className="ml-2 mr-2 inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 10v12"></path>
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                                    </svg>
                                    1.2K
                                </button>
                                <button type="button" className=" inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 14V2"></path>
                                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                                    </svg>
                                </button>
                                </div>
                        </div>

                        <div className="m-2">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Share</button>

                        </div>
                                                    
                    </div>
                </div>
            </div>
        </div>
    )
}