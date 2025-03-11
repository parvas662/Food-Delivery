import Shimmer from "../shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

export default function RestaurantMenu() {
    let params = useParams();
    // console.log(params.resId) this will fetch the parameter used in restaurantMenu link. check in body component 
    const resMenu = useRestaurantMenu(params.resId);
    const [itemIndex, setitemIndex] = useState(null);

    if (resMenu === null) return <Shimmer />
    const { name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } = resMenu?.data?.cards[2]?.card?.card?.info
    //const items = resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    const itemCategories = resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return <>
        <div className="text-sm w-9/12 m-auto my-7 bg-gray-100 rounded-4xl shadow-gray-300 shadow-2xl p-4 flex-col ">
            <h1 className="text-3xl font-extrabold  my-3 ">{name}</h1>
            <h3 className="text-lg font-bold"  >{avgRatingString} ({totalRatingsString}) : ₹{costForTwoMessage} </h3>
            <div>
                {cuisines.join(", ")}
            </div>
            <div className=" flex gap-2 ">
                <h3 className="text-sm font-bold" >Outlet</h3>
                <span className="bg-[#020600C99] text-sm font-light">{areaName}</span>
            </div>
            <h4 className="font-medium text-sm ">{sla.slaString}</h4>
        </div>

        {/*catagory acordians */}
        {itemCategories.map((category, index) => {
            //  controlled component , here restaurantCategories is controlled by restaurantMenu
            return <RestaurantCategories
                key={category.card?.card?.categoryId}
                data={category.card?.card}
                itemIndex={itemIndex == index ? true : false }
                setitemIndex={() => setitemIndex(index )}  
            />
        })}

    </>
}
