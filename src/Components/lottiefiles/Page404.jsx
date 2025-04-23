import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/lottie-json/404.json'; 

export default function Page404() {
    return (
        <div className="w-full flex h-full py-40  justify-center items-center bg-white " >
            <div className=" w-100 " > 
                <Lottie animationData = {animation}  
                />
            </div>
        </div>
    )
}
