import GitDataclass from "./GitDataclass";
import React from "react";

export default function About() {
    return (
      <div className="min-h-screen p-6 md:p-10 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-orange-600">About This Website</h1>
  
          <p className="mb-6 text-lg">
            This food ordering Website is inspired by Swiggy. It's a React-based frontend project that allows users to explore restaurants, search for food, and add items to a cart for ordering — all with a clean and responsive UI.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700">🛠️ Tech Stack</h2>
          <ul className="list-disc list-inside mb-6 text-base">
            <li>React (with Hooks)</li>
            <li>Redux Toolkit for state management</li>
            <li>TailwindCSS for styling</li>
            <li>React Router DOM for routing</li>
            <li>Lottie for animations</li>
            <li>Deployed on Netlify</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700">✨ Features</h2>
          <ul className="list-disc list-inside mb-6 text-base">
            <li>Live restaurant search</li>
            <li>Top-rated filter</li>
            <li>Fully responsive layout</li>
            <li>Cart functionality using Redux Toolkit</li>
            <li>Offline detection using a custom React hook</li>
            <li>Lazy loading with Suspense for performance</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700">🚀 Purpose</h2>
          <p className="mb-6 text-base">
            This project was built to improve my skills in React and state management with Redux Toolkit. It also helped me understand the importance of code architecture, reusable components, and performance optimization.
          </p>
  
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700">📌 Future Plans</h2>
          <ul className="list-disc list-inside mb-6 text-base">
            <li>Integrate a backend with Node.js & MongoDB</li>
            <li>Add authentication & order history</li>
            <li>Implement payment gateway</li>
          </ul> 
          <h2 className="text-2xl font-semibold mt-8 mb-2 text-gray-700">📬 Contact</h2>
          <p className="text-base">  
            <a href="https://github.com/parvas662" target="_blank">
            <GitDataclass /> </a>  {/* github data fetch and used classbased component*/ }
            
          </p>
        </div>
      </div>
    );
  }
  