import React, { useState } from "react";
import Title from "../Layouts/Title";
import ContactLeft from "./ContactLeft";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkndepek");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [processing, setProcessing] = useState(false); // Add p
  const validateForm = (elements) => {
    const { username, phoneNumber, email, subject, message } = elements;

    if (!username.value) {
      setErrMsg("Username is required!");
      return false;
    }
    if (!phoneNumber.value) {
      setErrMsg("Phone number is required!");
      return false;
    }
    if (!email.value) {
      setErrMsg("Please give your Email!");
      return false;
    }
    if (
      !String(email.value)
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
    ) {
      setErrMsg("Give a valid Email!");
      return false;
    }
    if (!subject.value) {
      setErrMsg("Please give your Subject!");
      return false;
    }
    if (!message.value) {
      setErrMsg("Message is required!");
      return false;
    }

    setErrMsg("");
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm(e.target.elements);

    if (isValid) {
      setProcessing(true); // Set processing state to true
      await handleSubmit(e);

      if (state.succeeded) {
        setSuccessMsg(
          `Thank you ${e.target.elements.username.value}, Your message has been sent successfully!`
        );
        e.target.reset();
      } else if (state.errors?.length > 0) {
        setErrMsg("Something went wrong, please try again.");
      }

      // Reset processing state and hide messages after 5 seconds
      setTimeout(() => {
        setProcessing(false);
        setSuccessMsg("");
        setErrMsg("");
      }, 5000);
    }
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
                    placeholder="e.g  John Doe"
                    className="contactInput"
                    type="text"
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
                    type="text"
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
                  placeholder="e.g  johnDoe@example.com"
                  className="contactInput"
                  type="email"
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
                  type="text"
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
                  placeholder="Your Message Here..."
                  cols="30"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <input
                  type="submit"
                  value="Send"
                  className={`w-full h-12 bg-white font-bold rounded-lg text-base text-black tracking-wider uppercase hover:font-bold hover:text-white hover:contactTextArea duration-300 hover:border-[1px] hover: border-transparent cursor-pointer ${
                    processing ? "opacity-50 pointer-events-none" : ""
                  }`}
                  disabled={state.submitting}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
