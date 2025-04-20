import { useState } from "react"
import ItemList from "./ItemList"

function RestaurantCategories({ data, itemIndex,setitemIndex}) {
    //const [local,setlocal] = useState(false)
     const expand = () => {  
      //  setlocal(!local)
        setitemIndex(!itemIndex); 
    }    
    return (
        <div >
            <div className="my-4 cursor-pointer w-9/12 m-auto bg-gray-50 shadow-lg p-4">
                <div onClick={expand} className="  flex items-center justify-between">
                    <span className="font-medium">{data.title} ({data.itemCards.length})</span>
                    <span >
                        {(itemIndex  ) ? (<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 448 512" className="svg-inline--fa fa-minus fa-w-14 fa-3x"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"  ></path>
                        </svg>) :
                            (<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" height="1em" width="1em" viewBox="0 0 448 512" className="svg-inline--fa fa-plus fa-w-14 fa-3x"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"  ></path>
                            </svg>)}
                    </span>
                </div>
                {(itemIndex  ) && <ItemList items = {data.itemCards}/> }
          
            </div>
        </div>
    )

}


export default RestaurantCategories