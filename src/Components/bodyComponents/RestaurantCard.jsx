import { CDN_URL, IMAGE_URL } from "../../utlils/constants";
function RestaurantCard({ Data }) {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } = Data?.info
  return (
    
      <div className="m-4 p-4 w-[200px] h-[450px] rounded-lg  bg-gray-100 hover:bg-gray-200" >
        <img
          className="res-logo rounded-lg "
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
        <h3 className="py-2 font-bold text-lg">{name}</h3>
        <h4 >{cuisines.join(", ")}</h4>
        <h4 >{costForTwo}</h4>
        <h4 >{avgRating + " stars"}</h4>
        <h4 >{"Time: " + sla.deliveryTime + " minutes"}</h4>
    </div>
  )
}

// Higher Order Component
// withpromtoed-input - RestaurantCard (is Input) ==> RestaurantCardPromoted(is Output)..
// withpromotedklabel is a component which take restaruantCard as a parameters and returns a functionalComponent.
// this HOC will generate a RestaurantCard here.

const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className=" ">
        <label className="absolute bg-black text-xs font-bold rounded-md text-white  py-1 px-2 " > Promoted </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


export { withPromotedLabel, RestaurantCard }