import React from "react";
import Lottie from 'lottie-react';
import animation from '../../assets/lottie-json/offline.json';

export default function Offline() {
    return (
        <div className="w-full flex h-full   justify-center items-center bg-white " >
        <div className=" w-100 " > 
                <Lottie
                    animationData={animation}
                />
            </div>
        </div>
    )
};