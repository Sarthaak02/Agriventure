import React, { useState } from 'react';
import ContactPic from '../Images/Contact.png';
import { toast } from 'react-hot-toast'
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Replace these values with your actual emailjs service ID, template ID, and user ID
    emailjs.sendForm('service_gb7mmvo', 'template_vm4z694', e.target, 'mNmiYG7vipCLRoH6s')
      .then((result) => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form data after sending
      }, (error) => {
        toast.error("Please try again");
      });
  };

  return (
    <div className="h-[1015px] bg-slate-100" >
      <div className='flex flex-row w-full h-full'>
        <div className='w-1/2 h-full m-auto'>
          <img src={ContactPic} alt="Get In touch photo" className='h-[900px] w-[900px] m-auto mt-10' />
        </div>
        <div className='flex flex-col w-1/2 m-auto bg-white p-10 mx-40 shadow-inner shadow-slate-400'>
          <h1 className="text-6xl font-thin text-teal-500 text-center">Contact Us</h1>
          <form className='flex flex-col pt-6 gap-4' onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Name' className='outline-none focus:border-b focus:border-b-teal-500 h-12 p-6 text-2xl bg-slate-100 shadow-inner shadow-slate-400' onChange={handleChange} value={formData.name} required />
            <input type="email" name="email" placeholder='Email' className='outline-none focus:border-b focus:border-b-teal-500 h-12 p-6 text-2xl bg-slate-100 shadow-inner shadow-slate-400' onChange={handleChange} value={formData.email} required />
            <textarea name="message" cols="30" rows="5" placeholder='Message' className='outline-none focus:border-b focus:border-b-teal-500 p-6 text-2xl bg-slate-100 shadow-inner shadow-slate-400' onChange={handleChange} value={formData.message} required></textarea>
            <button type="submit" className="text-2xl font-thin text-white  border border-teal-500 bg-teal-500 hover:bg-white hover:text-black px-4 py-2 w-full shadow-inner shadow-slate-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
