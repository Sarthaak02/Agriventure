import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CropsData from './Crops';
import District from './District';

export default function PricePrediction() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCrops = CropsData.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (crop) => {
    navigate('/district', { state: { cropName: crop.dataset_name, cropDisplayName: crop.name } });
  };  

  return (
    <div className="bg-slate-100 w-full">
      <h1 className='text-6xl font-thin text-teal-500 pt-16 text-center mb-10'>Select Crop for Price Prediction</h1>
      <input
        type="search"
        name=""
        id=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mx-auto p-4 border rounded-full outline-none focus:outline focus:outline-teal-500 h-[60px] text-2xl"
        style={{ margin: '0 auto', display: 'block', width: '500px' }}
        placeholder="Search Crops..."
      />
      <div className='grid grid-cols-4 gap-12 p-12'>
        {filteredCrops.map((crop) => (
          <button key={crop.id} className='flex flex-row bg-white rounded-2xl shadow-xl shadow-slate-300 justify-between py-8 pl-24 pr-28 transition duration-300 ease-in-out transform hover:scale-110' onClick={() => handleClick(crop)}>
            <img src={crop.image} alt={crop.name} className="w-[100px] h-[100px]" />
            <p className='text-5xl pt-6'>{crop.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
