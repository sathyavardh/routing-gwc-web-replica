import React, { useState } from "react";

export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [msg, setMsg] = useState("");
//   document.getElementById('text-value').value is not used in react js


//   console.log("Current State of first name", fname);
//   console.log("Current State of last name", lname);
//   console.log("Current State of email", email);
//   console.log("Current State of phone", phone);
//   console.log("Current State of msg", msg);
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted!!");
        console.log("Current State", fname,lname,email,phone,msg);
    }


  return ( 
    <>
    <div>
    <div className="contact-background mt-4 relative"></div>
    <div className="contact-content">
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg -mt-64 absolute end-40">
      <h2 className="text-2xl font-bold mb-5 text-center">Contact Us</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">First Name</label>
          <input
            type="text"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e)=>{setFname(e.target.value)}}
          />	
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Last Name</label>
          <input
            type="text"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e)=>{setLname(e.target.value)}}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Phone</label>
          <input
            type="tel"
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500" value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label className="mb-2 font-semibold text-gray-700">Message</label>
          <textarea
            className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500"
            rows="2" onChange={(e)=>{setMsg(e.target.value)}}
          ></textarea>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-customPurple text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
    <div className="start-12 -mt-24 absolute">
        <h2 className="text-white font-bold text-5xl text-justify">Get In Touch With Us</h2>
        <p className="text-white mt-10 text-lg text-justify">Have an inquiry or some feedback to us? <br/>Fill out this form to contact our team.</p>
    </div>



    </div>
    <div className="mt-10">
        <h2 className="font-bold text-3xl text-purple-950 ">Locations</h2>
        <div className="grid grid-cols-3">
            <div className="ml-10 mt-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300">
                <img src="https://gwcdata.ai/assets/usa-CcQyAOND.webp" alt="USA" />
                <h2 className="text-purple-950">USA</h2>
                <p>600 N Broad Street Suite 5 #3907 </p>
                <p>Middletown, DE 19709</p>
            </div> 
            <div className="ml-10 mt-10 mr-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300">
                <img src="https://gwcdata.ai/assets/bangalore-OAFvJ2yT.webp" alt="Bengaluru" />
                <h2 className="text-purple-950">Bengaluru</h2>
                <p>Novel Tech Park, HSR Extension,</p>
                <p>Bengaluru - 560068</p>  
            </div>
            <div className="mt-10 mr-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300">
                <img src="https://gwcdata.ai/assets/chennai-G5xciIqz.webp" alt="Chennai" />
                <h2 className="text-purple-950">Chennai</h2>
                <p>Siddharth Building, Industrial Estate, Guindy,</p>
                <p>Chennai - 600032</p>
            </div>
            <div className="ml-10 mt-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300 ">
                <img src="https://gwcdata.ai/assets/Coimbatore-qcO1NMe5.webp" alt="Coimbatore" />
                <h2 className="text-purple-950">Coimbatore</h2>
                <p>MayFlowerSignature</p> 
                <p>Near PSG College of Technology, Coimbatore</p>
            </div>

            <div className="ml-10 mt-10 mr-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300">
                <img src="https://gwcdata.ai/assets/hosur-q_EAlBLR.webp" alt="Hosur" /> 
                <h2 className="text-purple-950">Hosur</h2>
                <p>Opp. 5 Star Petrol Bunk, NH Bangalore Road,</p> 
                <p>Hosur-635109</p>
            </div>

            <div className="mr-10 mt-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300 ">
                <img src="https://gwcdata.ai/assets/dharmapuri-TsCgOYin.webp" alt="Dharmapuri" /> 
                <h2 className="text-purple-950">Dharmapuri</h2>
                <p>Opp. Hero Showroom, Bharathipuram,</p> 
                <p>Dharmapuri-636705</p>
            </div>

            <div className="ml-10 mt-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300 mb-20">
                <img src="https://gwcdata.ai/assets/salem-Lg5h_vNt.webp" alt="Salem" /> 
                <h2 className="text-purple-950">Salem</h2>
                <p>Kamarajar Nagar Colony,</p> 
                <p>Ammapet, Salem-636014</p>
            </div>

            <div className="ml-10 mt-10 mr-10 border border-gray-200 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-300 mb-20">
                <img src="https://gwcdata.ai/assets/tirupattur-2RU7ev0S.webp" alt="Tirupattur" /> 
                <h2 className="text-purple-950">Tirupattur</h2>
                <p>3/6, CKC Road, Tirupattur - 635501</p>
                
            </div>
        </div>
    </div>
    </div>
    
    </>
  );
}
