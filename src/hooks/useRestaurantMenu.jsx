import { useEffect, useState } from "react";
import { MENU_URL } from "../utlils/constants";

const useRestaurantMenu=(resId)=>{
    // fetchData 
    const[resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData(); 
    },[])
    
    async function fetchData(){
        const data = await fetch(MENU_URL+resId);
        const json = await data.json(); 
        setResInfo(json);
        console.log(json)
    }    
    return resInfo;
} 
export default  useRestaurantMenu;
