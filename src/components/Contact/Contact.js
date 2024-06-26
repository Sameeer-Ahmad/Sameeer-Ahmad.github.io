import React, { useState } from "react";
import Title from "../Layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [processing, setProcessing] = useState(false);

  const validateForm = () => {
    const { username, phoneNumber, email, subject, message } = formData;

    if (!username.trim()) {
      setErrMsg("Username is required!");
      return false;
    }
    if (!phoneNumber.trim()) {
      setErrMsg("Phone number is required!");
      return false;
    }
    if (!email.trim()) {
      setErrMsg("Please give your Email!");
      return false;
    }
    if (
      !email
        .trim()
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setErrMsg("Give a valid Email!");
      return false;
    }
    if (!subject.trim()) {
      setErrMsg("Please give your Subject!");
      return false;
    }
    if (!message.trim()) {
      setErrMsg("Message is required!");
      return false;
    }
    setErrMsg("");
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setProcessing(true);
      try {
        const response = await fetch("https://formspree.io/f/xkndepek", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();

        if (result.ok) {
          setSuccessMsg(
            `Thank you ${formData.username}, Your message has been sent successfully!`
          );
          setTimeout(() => {
            setSuccessMsg("");
          }, 5000);
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setErrMsg("Something went wrong, please try again.");
          setTimeout(() => {
            setErrMsg("");
          }, 5000);
        }
      } catch (error) {
        setErrMsg("Something went wrong, please try again.");
      }

      setProcessing(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              className="w-full h-[160] flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              onSubmit={handleFormSubmit}
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    name="username"
                    placeholder="Username"
                    className="contactInput"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    Phone
                  </p>
                  <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="contactInput"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  Email
                </p>
                <input
                  name="email"
                  placeholder="Email"
                  className="contactInput"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  name="subject"
                  placeholder="Subject"
                  className="contactInput"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="message"
                  className="contactTextArea"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  cols="30"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className={`w-full h-12 bg-white font-bold rounded-lg text-base text-black tracking-wider uppercase hover:font-bold hover:text-white hover:contactTextArea duration-300 hover:border-[1px] hover: border-transparent cursor-pointer ${
                    processing ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={processing}
                >
                  {processing ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
