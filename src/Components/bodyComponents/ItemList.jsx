import { useState } from "react"
import { IMAGE_URL } from "../../utlils/constants"

const ItemList = ({ items }) => {
    return (
        <div className="w-full m-auto bg-gray-50  p-4 flex-col ">
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b border-slate-300 p-4 flex justify-between" >
                    <div className="w-8/12 py-2 ">
                        <span > {item.card?.info?.itemAttribute.vegClassifier === "VEG" ? "🟢" : "🔴"}
                            <span className="text-bold text-sm ">{item.card?.info?.isBestseller ? "BestSeller" : ""}</span> </span>
                        <h3 className="font-bold " >{item.card.info.name}</h3>
                        <span className="block font-medium my-1 ">₹{(item.card?.info?.defaultPrice || item.card?.info?.price) / 100} </span>
                        <span className="text-sm my-1 block"> {item.card?.info?.ratings?.aggregatedRating?.rating || 0} ({item.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 0} ratings)</span>
                        <span className="w-120 font-extralight text-sm text-wrap ">{item.card?.info?.description}</span>
                    </div>
                    <div className="w-3/12 p-4 relative">
                        <img className="w-45 border rounded-xl " src={IMAGE_URL + item.card?.info?.imageId} alt={item.card?.info?.name} />
                        <button className=" absolute bottom-0 left-10  text-green-600 w-30 mt-3 p-2 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-300 shadow-lg"> ADD </button>
                        
                    </div>
                </div>
            ))}

        </div>
    )

}

export default ItemList