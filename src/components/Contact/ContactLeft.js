import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-cardBg p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center  ">
      <img
        className="w-full h-65 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Sameer Ahmad"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-textPrimary">Sameer</h3>
        <p className="text-lg font-normal text-textMuted">
          MERN Stack Developer
        </p>
        <p className="text-sm font-normal text-designColor">SDE 1 @ Zopping</p>
        <p className="text-base text-textMuted tracking-wide">
          Get in touch and let me know how I can help you. Fill out the form and
          i'll be in touch soon.
        </p>
        <p className="text-base text-textPrimary flex items-center gap-2">
          Location:{" "}
          <span className="text-lightText">New Delhi, India</span>
        </p>
        <p className="contact-phone text-base text-textPrimary flex items-center gap-2">
          Phone: <span className="text-lightText">(+91) 8700865292</span>
        </p>
        <p className="contact-email text-base text-textPrimary flex items-center gap-2">
          Email: <span className="text-lightText">ahmad17sameer@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
