import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-65 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sameer</h3>
        <p className="text-lg font-normal text-gray-300">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-300 tracking-wide">
          Get in touch and let me know how I can help you. Fill out the form and
          i'll be in touch soon.
        </p>
        <p className="text-base text-white flex items-center gap-2">
          Address:{" "}
          <span className="text-lightText">
            Siraspur , New Delhi, Delhi, India - 110042
          </span>
        </p>
        <p className="contact-phone text-base text-white flex items-center gap-2">
          Phone: <span className="text-lightText">(+91) 8700865292</span>
        </p>
        <p className="contact-email text-base text-white flex items-center gap-2">
          Email: <span className="text-lightText">ahmad17sameer@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
