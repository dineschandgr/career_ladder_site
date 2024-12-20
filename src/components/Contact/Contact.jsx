import mail from "../../asset/Contact/email.png";
import pic2 from "../../asset/Contact/Address-removebg-preview.png";
import phone from "../../asset/Contact/phone.png";
import pic3 from "../../asset/Contact/contact.png";
import Nav from "../nav/nav";
import { Footer } from "../Footer/Footer";
import React, { useState } from "react";

export const Contact = () => {
  const address1 = [
    {
      image: pic2,
      tittle: "ADDRESS 1",
      text: "Door No. 207, Avinasi Road, Opp GRG Ladies Hostel, B.R Puram, Coimbatore - 641004",
    },
  ];
  const address2 = [
    {
      image: pic2,
      tittle: "ADDRESS 2",
      text: "5, Bank of Baroda Upstairs, Madukkarai Main Road,Opp, Abirami Hospital, Sundarapuram, Coimbatore - 641024",
    },
  ];
  const Contact = [
    {
      image: phone,
      tittle: "PHONE NUMBER",
      text: "+91 8807148869",
    },
    {
      image: mail,
      tittle: "EMAIL ADDRESS ",
      text: "info@careerladderedu.com",
    },
  ];

  return (
    <div className="font-sans">
      <Nav />
      {/* Hero Section */}
      <div className="bg-[url('/src/asset/Contact/course.png')] bg-cover bg-center h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[80vh] lg:w-full w-full bg-no-repeat pt-24 pb-24 mt-0 mb-12">
        <h1 className="text-center font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-700 transition-all duration-300 hover:text-yellow-500"></h1>
        <div className="text-center mt-4">
          <p className="text-white font-normal transition-all duration-300 hover:text-gray-300"></p>
        </div>
      </div>

      {/* Gradient Background Section */}
      <div className="bg-gradient-to-r from-violet-700 to-white">
        {/* Address 1 Section */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center px-4 py-10">
          {address1.map((address, index) => (
            <div key={index} className="flex flex-col lg:flex-row w-full lg:w-[45%] gap-6">
              <div className="bg-gray-200 hover:bg-slate-300 w-full p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <img
                  src={address.image}
                  alt="Address 1"
                  className="h-20 mx-auto mt-4 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-center text-2xl font-bold mt-2">{address.tittle}</h3>
                <p className="text-center mt-1">{address.text}</p>
              </div>
              <div className="w-full lg:w-[50%]">
                <iframe
                  className="w-full h-64 bg-gray-200 hover:bg-slate-300 p-3 rounded-2xl mt-3 transition-all duration-300 hover:scale-105"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.174929938345!2d77.01394977584019!3d11.02549865454856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857b737df98c7%3A0xd927745afbd71500!2sCareer%20Ladder%20-%20Data%20Science%20%2CData%20Analytics%2CAI%2CML%2CFull%20stack%20Java%2CPython%2CWeb%2CEmbedded%2CCloud%2CPower%20BI%2CIOT%2C%20UX%20UI!5e0!3m2!1sen!2sin!4v1734688703028!5m2!1sen!2sin"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Address 2 Section */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center px-4 py-10">
          {address2.map((address, index) => (
            <div key={index} className="flex flex-col lg:flex-row w-full lg:w-[45%] gap-6">
              <div className="bg-gray-200 hover:bg-slate-300 w-full p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <img
                  src={address.image}
                  alt="Address 2"
                  className="h-20 mx-auto mt-4 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-center text-2xl font-bold mt-2">{address.tittle}</h3>
                <p className="text-center mt-1">{address.text}</p>
              </div>
              <div className="w-full lg:w-[50%]">
                <iframe
                  className="w-full h-64 bg-gray-200 hover:bg-slate-300 p-3 rounded-2xl mt-3 transition-all duration-300 hover:scale-105"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1321793692737!2d76.96774958491973!3d10.953386628090705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0aecb1b883%3A0x35e06c84f5093156!2sCareer%20Ladder%20-%20Sundarapuram-%20Data%20Science%2CData%20Analytics%2CCyberSecurity%2CAI%2CML%2CFull%20Stack%20Java%2CPython%2CWeb%2CCloud%2CPowerBI%2C%20UI%20UX!5e0!3m2!1sen!2sin!4v1734688791461!5m2!1sen!2sin"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center px-4 py-10">
          {Contact.map((contact, index) => (
            <div key={index} className="bg-gray-200 hover:bg-slate-300 w-full lg:w-[45%] p-6 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg">
              <img
                src={contact.image}
                alt="Contact"
                className="h-20 mt-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-center text-2xl font-bold mt-2">{contact.tittle}</h3>
              <p className="text-center mt-1">{contact.text}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};



export const ContactForm = () => {
  const [result, setResult] = useState(""); // State to hold submission result

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "cd804598-af1f-4895-9b6b-6eb84dbf40df"); // Replace with your actual Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); // Reset the form after successful submission
      } else {
        setResult(data.message || "There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="mt-10 pt-10 border-t-2 border-gray-300">
      <h2 className="text-center text-2xl font-bold mb-6">Contact Us</h2>
      <div className="flex justify-center pb-8 px-4 pt-14 mb-10 rounded-2xl flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="hidden lg:flex lg:w-[40%]">
          <div className="bg-gradient-to-r from-violet-700 to-white h-[70vh] w-full rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={pic3} // Replace with your actual image path
              alt="Contact Illustration"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-r from-blue-600 to-pink-600 lg:w-[36vw] w-full rounded-lg p-8 space-y-6">
          <p className="text-xl font-bold text-white">Let's Talk</p>
          <h2 className="text-white font-bold text-3xl">Get In Touch</h2>

          {/* Form Fields */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <input
                className="w-full lg:w-[26vw] placeholder:text-white pl-3 bg-gradient-to-r from-blue-800 to-pink-800 rounded h-12 transition-all duration-300 hover:scale-105"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="lg:flex gap-8 mt-4 space-y-4 lg:space-y-0">
              <input
                className="w-full lg:w-[170px] placeholder:text-white pl-3 bg-gradient-to-r from-blue-800 to-pink-800 rounded h-12 transition-all duration-300 hover:scale-105"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="w-full lg:w-[170px] placeholder:text-white pl-3 bg-gradient-to-r from-blue-800 to-pink-800 rounded h-12 transition-all duration-300 hover:scale-105"
                type="text"
                name="phone"
                placeholder="Phone"
              />
            </div>
            <div>
              <textarea
                className="w-full lg:w-[26vw] mt-4 bg-gradient-to-r from-blue-800 to-pink-800 placeholder:text-white pl-3 rounded h-32 transition-all duration-300 hover:scale-105"
                name="message"
                placeholder="Your Message Here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-pink-700 p-4 text-white rounded-full text-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-pink-600 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Result Message */}
          <span className="block text-center text-white mt-4">{result}</span>
        </div>
      </div>
    </div>
  );
};

