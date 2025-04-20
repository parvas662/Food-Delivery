import { useState } from "react";
import { LOGO_URL } from "../utlils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

export default function Header() {
  const [btnNameReact, setbtnNameReact] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItem = useSelector((store)=>  store.cart.items)  

  return (
    <div style={{backgroundColor : 'rgb(255, 82, 0)' }}>
      <div className="flex justify-between shadow-lg w-full p-4" >
        <div className="w-25">
          <img className="" src={LOGO_URL} alt="Food logo" />
        </div>

        <div className="flex justify-center items-center px-4">
          <ul className="flex  gap-10 ">
            <li>
              Online Status: { onlineStatus ? "🟢" : "🔴" }
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>  
            <li>  
              <Link to={"/contactus"}>Contact Us</Link>
            </li>  
            <li>
              <Link to={"/grocery"}>Grocery</Link>
            </li>
            <li className="text-xl font-bold ">  
              <Link to={"/cart"} >Cart ({cartItem.length} items)</Link>
            </li>  
            <button className="login-btn" onClick={() => {
              setbtnNameReact(!btnNameReact)
            }}>{(btnNameReact ? "Logout" : "Login")}</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

