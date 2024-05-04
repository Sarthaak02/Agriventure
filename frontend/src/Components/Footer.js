import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegMap } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-row h-[275px] text-white bg-gray-900 justify-evenly py-12" >
      <div className="flex flex-col gap-y-4">
        <h1 className="font-bold text-4xl text-teal-500">AgriVenture</h1>
        <p className="text-justify w-2/3 text-xl">
          Increase Your Profitability with Agriventure: Cultivating Success,
          Harvesting Growth.
        </p>
        <a href="tel:+91-9325643391" className="flex flex-row gap-x-3 text-xl ">
          <BsTelephoneFill className="hover:text-black"/>
          <p>Call Now</p>
        </a>
        <a href="mailto:sarthakbornare@gmail.com" className="flex flex-row gap-x-3 text-xl ">
          <MdEmail className="text-2xl hover:text-black"/>
          <p>Send Us Mail</p>
        </a>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-medium">Quick Links</h1>
        <ul className=" text-xl flex flex-col gap-y-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/getintouch">Get In Touch</Link></li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-medium">Our Services</h1>
        <ul className=" text-xl flex flex-col gap-y-2">
          <li><Link to="/prediction">Crop Price Prediction</Link></li>
          <li><Link to="/recommendation">Crop Recommendation</Link></li>
          <li><Link to="/forecasting">Weather Forecasting</Link></li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-medium">Address</h1>
        <p className="flex flex-row gap-x-3 text-xl ">
          <FaRegMap />
          Akurdi, Pune
        </p>
      </div>
    </div>
  );
}
