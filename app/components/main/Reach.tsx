
"use client"
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Reach = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [isLoading,setIsLoading] = useState('false');

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = () => {
    setSuccess("");
    if (!email) {
      setError("please enter your email");
      return;
    }
    if (!message) {
      setError("please enter your message");
      return;
    }
    const templateParams = {
      from_name: email,
      to_name: "Siddhi",
      message,
    };

    setError("");
    // setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        function (response) {
          setEmail("");
          setName("");
          setMessage("");
          // setIsLoading(false);
          setSuccess("Your message has been sent successfully.");
        },
        function (error) {
          setError("some error occured");
          console.log(error);
          // setIsLoading(false);
        }
      );
  };
    return (
        <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="absolute inset-0 bg-gray-900">
          <iframe 
            title="map" 
            width="100%" 
            height="100%" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14384.8258068!2d85.4821144!3d26.5815607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6b7b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSitamarhi%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin" 
            style={{ filter: 'grayscale(50%) contrast(110%) opacity(60%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 text-2xl t mb-1  title-font font-bold">GET IN TOUCH</h1>
            <p className="leading-relaxed mb-5 text-white">
Lets connect and collaborate! Reach out to discuss opportunities or share ideas





</p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" value={message}  name="message" onChange={(e)=> setMessage(e.target.value)} required className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button onClick={sendEmail}  type="submit"  className="text-white bg-gradient-to-r from-purple-500 to-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">Button</button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">with love Siddhi :3</p>
          </div>
        </div>
      </section>
    )
}

export default Reach

