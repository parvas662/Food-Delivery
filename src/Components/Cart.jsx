import { useDispatch, useSelector } from "react-redux"
import ItemList from "./bodyComponents/ItemList"
import { clearCart } from "../utlils/reduxSlice.js/cartSlice";

export default function Cart(){

    const cartItem = useSelector((store) => store.cart.items) 
    const dispatch = useDispatch(); 
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
    <div className="w-8/12 m-auto">
         <h1 className="text-center font-bold text-2xl m-4  ">Cart</h1>
         
         {cartItem.length == 0 ? <h1 className="text-center font-bold text-2xl m-4 ">Cart is empty. Add Items to the cart! </h1> :  
        <div className="  mb-4">
            <ItemList items = {cartItem} />
            <div className="flex justify-center" ><button className="p-2 m-2  rounded-md bg-gray-500 shadow-md hover:bg-gray-400 "
        onClick={handleClearCart}>Clear Cart</button></div>
        </div>  }
    </div>
    )
}