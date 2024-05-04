import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../Images/HomeImage.png';

export default function Home() {
  return (
    <div className="flex flex-row w-full h-[1015px] bg-slate-100">
      <div className="flex flex-col w-2/5 text-left px-12 my-auto gap-y-8">
        <h1 className="text-teal-500 text-6xl font-bold">Increase Your Profitability with Agriventure: Cultivating Success, Harvesting Growth.</h1>
        <h2 className="text-3xl font-thin">We offer Crop Price Prediction, Crop Recommendation and Weather Forecasting.</h2>
        <Link to="/services">
          <button className="text-xl font-thin bg-teal-500 text-white border border-teal-500 hover:bg-slate-100 hover:text-black px-4 py-2 w-[200px]">Explore More</button>
        </Link>
      </div>
      <img src={HomeImage} alt="Home Image" className="bottom-0 right-0 h-4/5 w-3/5 mt-[203px]" />
    </div>
  );
}
