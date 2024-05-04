import React from "react";
import AboutImage from "../Images/AboutImage.png";
import Prajwal from '../Images/Prajwal.jpg'
import Sarthak from '../Images/Sarthak.png'
import Sumit from '../Images/Sumit.png'
import man from '../Images/man.png'
import Tushar from '../Images/Tushar.jpeg'
import { FaLinkedin } from "react-icons/fa6";


export default function About() {
  return (
    <div className="w-full bg-slate-200">
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-y-6 py-16 px-48 w-3/5">
          <h1 className="text-6xl text-teal-500 font-thin text-start">Our Story</h1>
          <div className="flex flex-col gap-y-3 text-3xl font-thin text-justify">
            <p>
              In June 2023, inspired by our farming backgrounds, we had a big
              idea: to help farmers thrive. Knowing the ins and outs of the
              market, we wanted to create something that would make a real
              difference. With a lot of hard work and dedication, we're on a
              mission to change farming for the better and support rural
              communities along the way.
            </p>
            <p>
              Determined to bring our vision to life, we embarked on the journey
              of data collection. We gathered extensive datasets, including one
              from{" "}
              <a
                href="https://agmarknet.gov.in/SearchCmmMkt.aspx?Tx_Commodity=164&Tx_State=MH&Tx_District=0&Tx_Market=0&DateFrom=01-Jan-2021&DateTo=31-Dec-2023&Fr_Date=01-Jan-2021&To_Date=31-Dec-2023&Tx_Trend=0&Tx_CommodityHead=Capsicum&Tx_StateHead=Maharashtra&Tx_DistrictHead=--Select--&Tx_MarketHead=--Select--"
                className="text-blue-900"
              >
                agmarknet
              </a>{" "}
              with a vast array of entries and another comprising substantial data
              points. After meticulous collection and rigorous cleaning throughout
              2023, we began building the website in early 2024.
            </p>
          </div>
        </div>
        <img
          src={AboutImage}
          alt="About Page Pic"
          className="my-16 transition duration-300 ease-in-out transform hover:brightness-75 hover:scale-105  shadow-2xl rounded-2xl shadow-orange-500
          "
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-6xl text-teal-500 font-thin text-center px-48 bg-teal-100 h-[500px] pt-8">Meet Our Team</h1>
        <div className="flex flex-col gap-16 justify-around items-center -mt-[350px]">
          {/* First Div */}
          <div className="flex flex-row gap-16">
            <div className="bg-white rounded-3xl flex flex-col w-[400px] h-[575px] transition duration-300 ease-in-out transform hover:brightness-75 hover:scale-105 shadow-inner shadow-slate-500">
              <img src={Sarthak} alt="Sarthak Photo" className="w-[300] h-[295px] mx-auto rounded-full pt-2"/>
              <div className="flex flex-col h-full m-3 font-thin bg-slate-200 rounded-xl">
                <h1 className="text-3xl text-center font-light">Sarthak Bornare</h1>
                <p className="text-justify px-7 py-3 text-2xl">Designed and developed the user interface for Agriventure, while also collaborating on API integration for enhanced functionality.</p>
                <a href="https://www.linkedin.com/in/sarthak-bornare-8042b1239/" target="_blank" className="text-blue-600 text-3xl mx-auto">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl flex flex-col w-[400px] h-[575px] transition duration-300 ease-in-out transform hover:brightness-75 hover:scale-105 shadow-inner shadow-slate-400">
              <img src={Sumit} alt="Sumit Photo" className="w-[300] h-[300px] mx-auto rounded-full pt-2"/>
              <div className="flex flex-col h-full m-3 font-thin bg-slate-200 rounded-xl">
                <h1 className="text-3xl text-center font-light">Sumit Done</h1>
                <p className="text-justify px-7 py-3 text-2xl">Worked on backend development for Agriventure, implementing robust APIs and integration with the frontend user interface.</p>
                <a href="https://www.linkedin.com/in/sumit-done-b4a480223/" target="_blank" className="text-blue-600 text-3xl mx-auto">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl flex flex-col w-[400px] h-[575px] transition duration-300 ease-in-out transform hover:brightness-75 hover:scale-105 shadow-inner shadow-slate-400">
              <img src={man} alt="Rohan Photo" className="w-[300] h-[300px] mx-auto rounded-full pt-2"/>
              <div className="flex flex-col h-full m-3 font-thin bg-slate-200 rounded-xl">
                <h1 className="text-3xl text-center font-light">Rohan Dhalpe</h1>
                <p className="text-justify px-7 py-3 text-2xl">Worked on database management , ensuring efficient data storage, retrieval, and optimization for application performance.</p>
                <a href="https://www.linkedin.com/in/rohandhalpe/" target="_blank" className="text-blue-600 text-3xl mx-auto">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
          </div>
          {/* Second Div */}
          <div className="flex flex-row gap-16 pb-16">
          <div className="bg-white rounded-3xl flex flex-col w-[400px] h-[575px] transition duration-300 ease-in-out transform hover:brightness-75 hover:scale-105 shadow-inner shadow-slate-400">
              <img src={Tushar} alt="Tushar Photo" className="w-[300] h-[300px] mx-auto rounded-full pt-2"/>
              <div className="flex flex-col h-full m-3 font-thin bg-slate-200 rounded-xl">
                <h1 className="text-3xl text-center font-light">Tushar Dhobale</h1>
                <p className="text-justify px-7 py-3 text-2xl">Conducted R&D for Agriventure, authored research papers, and managed copyright compliance for intellectual property protection.</p>
                <a href="https://www.linkedin.com/in/tushar-dhobale-5900a1291/" target="_blank" className="text-blue-600 text-3xl mx-auto">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl flex flex-col w-[400px] h-[575px] transition duration-300 ease-in-out transform hover:brightness-75 hover:scale-105 shadow-inner shadow-slate-400">
              <img src={Prajwal} alt="Prajwal Photo" className="w-[300] h-[300px] mx-auto rounded-full pt-2"/>
              <div className="flex flex-col h-full m-3 font-thin bg-slate-200 rounded-xl">
                <h1 className="text-3xl text-center font-light">Prajwal Jadhav</h1>
                <p className="text-justify px-7 py-3 text-2xl">Collected and cleaned data, implemented machine learning algorithms to enhance Agriventure's services. Also work on testing. </p>
                <a href="https://www.linkedin.com/in/prajwaljadhav808/" target="_blank" className="text-blue-600 text-3xl mx-auto">
                  <FaLinkedin/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
