import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      className="w-full flex flex-col items-center justify-center pb-10 mt-10"
    >
      <p className="md:text-base text-sm md:font-normal text-center text-white">
        © 2025 You met me at a very strange time in my life. All rights
        reserved.
      </p>

      <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 mt-5 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 border-white border-1 rounded-md"
            >
              <info.icon color="white"/>
            </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
