import { useEffect, useState } from "react";
import {withPromotedLabel, RestaurantCard} from "./bodyComponents/RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function Body() {
  // local state variable - super powerful variable
  const [resList, setresList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)   // Higher Order Component.

  useEffect(() => {
    fetchData();
  }, [])

    const fetchData = async () => {
      try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // optional chaining = (question mark thing) 
        setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
      catch (e) {
        console.log("hii im error")
        console.log(e)
      }
  }
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <>
      <h1> Looks like you're offline!! Please check your internet connection</h1>
    </>
  }
  console.log(resList)
  if ( resList.length == 0) {
    return <Shimmer />
  }

  return (
    <div className="body "  >
      <div className=" m-4 pt-4  pb-1 px-15 flex  ">
        <div className=" flex gap-5 ">
          <input type="text"
            className=" border-2 border-solid min-w-74 border-black rounded-md"
            value={searchText}
            onChange={(e) => { setsearchText(e.target.value) }}
            placeholder="Enter your Fav. restaurant"
          />

          <button className="px-4 py-1 bg-green-800 text-white rounded-lg"
            onClick={() => {
              //Filter the restaurant cards and update the UI  
              const filtered = resList.filter((res) =>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase())

              )
              setfilteredList(filtered)

            }}>  Search  </button>

          <button className="px-4 py-2 bg-gray-300 rounded-lg "
            onClick={() => {
              const filteredRestaurants = resList.filter((res) => res.info.avgRating >= 4.5)
              console.log(filteredRestaurants)
              setfilteredList(filteredRestaurants)
            }}
          >
            Top Rated Restaurants
          </button>

        </div>
      </div>

      <div className=" res-container flex flex-wrap  gap-2 px-15">
        {
          filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.avgRating >4.4 ?(
               <RestaurantCardPromoted Data={restaurant} />
               ) : (<RestaurantCard Data={restaurant}/> ) }
            </Link>
          ))
        }

      </div>
    </div>
  );
}
