import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/lottie-json/empty.json';

export default function Empty() {
    return (
        <div className="w-100vh h-[calc(100vh-250px)] mt-20  flex justify-center items-center" >
            <div className="w-100 h-100 " >
                <Lottie animationData = {animation} 
                />
            </div>
        </div>
    )
}
