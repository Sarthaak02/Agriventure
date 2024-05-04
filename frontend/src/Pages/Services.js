import React from "react";
import PricePrediction from "../Images/PricePrediction.png";
import Recommendaion from "../Images/Recommendaion.png";
import Weather from "../Images/Weather.png";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="h-[1015px] bg-slate-100 flex flex-col gap-y-16 justify-center items-center">
      <h1 className="text-6xl font-thin text-teal-500 -mt-16">Services</h1>
      <div className="flex flex-row gap-16">
        <div className="bg-white shadow-inner shadow-slate-600 p-8 w-[500px] rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src={PricePrediction}
            alt="crop price prediction pic "
            className="h-[400px] w-[400px] mx-auto"
          />
          <h1 className="text-3xl font-medium text-teal-500 pt-2 text-center">
            Crop Price Prediction
          </h1>
          <p className="text-2xl py-4 text-justify">
            Utilize our advanced Crop Price Prediction feature to forecast
            future trends and analyze historical data for informed
            decision-making in agricultural operations.
          </p>
          <Link to="/prediction">
            <button className="text-xl font-thin text-white  border border-teal-500 bg-teal-500 hover:bg-white hover:text-black px-4 py-2 w-[150px]">
              Try Now
            </button>
          </Link>
        </div>

        <div className="bg-white shadow-inner shadow-slate-600 p-8 w-[500px] rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src={Recommendaion}
            alt="crop price prediction pic "
            className="h-[400px] w-[400px] mx-auto"
          />
          <h1 className="text-3xl font-medium text-teal-500 pt-2 text-center">
            Crop Recommendaion
          </h1>
          <p className="text-2xl py-4 text-justify">
            Leverage data-driven insights to recommend the most suitable crops,
            ensuring maximum yield and sustainability for agricultural
            prosperity and decision making.{" "}
          </p>
          <Link to="/ercommendaion">
            <button className="text-xl font-thin text-white  border border-teal-500 bg-teal-500 hover:bg-white hover:text-black px-4 py-2 w-[150px]">
              Try Now
            </button>
          </Link>
        </div>

        <div className="bg-white shadow-inner shadow-slate-600 p-8 w-[500px] rounded-3xl transition duration-300 ease-in-out transform hover:scale-105">
          <img
            src={Weather}
            alt="crop price prediction pic "
            className="h-[400px] w-[400px] mx-auto"
          />
          <h1 className="text-3xl font-medium text-teal-500 pt-2 text-center">
            Weather Forecasting
          </h1>
          <p className="text-2xl py-4 text-justify">
            Accurately predict weather patterns to empower farmers with
            actionable insights for optimal planning and decision-making in
            agricultural operations.
          </p>
          <Link to="/weather">
            <button className="text-xl font-thin text-white  border border-teal-500 bg-teal-500 hover:bg-white hover:text-black px-4 py-2 w-[150px]">
              Try Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
