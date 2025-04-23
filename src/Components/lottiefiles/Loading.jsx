import React from 'react'
import Lottie from 'lottie-react'
import animation from '../../assets/lottie-json/loading.json';

export default function Loading() {
    return (
        <div className="w-full  flex justify-center " >
            <div className="w-100 h-100 " >
                <Lottie animationData = {animation} 
                />
            </div>
        </div>
    )
}
