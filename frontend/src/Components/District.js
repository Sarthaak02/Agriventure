import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MarketListArray from "./MarketList";

export default function District() {
    const location = useLocation();
    const { state } = location;

    const [district, setDistrict] = useState("");
    const [market, setMarket] = useState("");
    const [predictedPrice, setPredictedPrice] = useState(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleDistrictChange = (selectedDistrict) => {
        setDistrict(selectedDistrict);
        setMarket("");
        setIsSubmitDisabled(true); 
    };

    const handleMarketChange = (selectedMarket) => {
        setMarket(selectedMarket);
        setIsSubmitDisabled(selectedMarket === ""); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/district', {
                crop: state.cropName,
                district,
                market
            });
            const { predicted_price } = response.data;
            setPredictedPrice(Math.floor(predicted_price));
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching predicted price:', error);
        }
    };

    return (
        <div className="h-[1015px] bg-slate-100 flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col shadow-2xl w-[800px] h-2/3 m-auto p-10 gap-3 bg-white justify-center">
                <h1 className="text-6xl font-thin text-teal-500 text-center pb-7">Select The District and Market for {state.cropDisplayName}</h1>
                <select value={district} onChange={(e) => handleDistrictChange(e.target.value)} className="h-12 px-4 outline-none text-2xl bg-slate-100 focus:border-2 focus:border-teal-500">
                    <option value="">Select District</option>
                    {Object.keys(MarketListArray[0]).map((districtName, index) => (
                        <option key={index} value={districtName}>{districtName}</option>
                    ))}
                </select>
                <select value={market} onChange={(e) => handleMarketChange(e.target.value)} disabled={!district} className="h-12 px-4 outline-none text-2xl bg-slate-100 focus:border-2 focus:border-teal-500">
                    <option value="">Select Market</option>
                    {district && MarketListArray[0][district].map((marketName, index) => (
                        <option key={index} value={marketName}>{marketName}</option>
                    ))}
                </select>
                <button type="submit" disabled={isSubmitDisabled} className={`h-12 text-2xl font-thin text-white border border-teal-500 ${isSubmitDisabled ? 'bg-gray-300' : 'bg-teal-500 hover:bg-white hover:text-black'}`}>
                    Submit
                </button>
                <p className="pt-9 text-3xl">
                  Predicted Price for {state.cropDisplayName}: &nbsp; 
                  {predictedPrice !== null && <span className="text-teal-500 font-extrabold">&nbsp; Rs. {predictedPrice} per quintal</span>}
                </p>
            </form>
        </div>
    );
}
