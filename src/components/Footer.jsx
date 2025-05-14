import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Naresh. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="https://www.instagram.com/n_a_r_e_s_h____sri__/" className="underline hover:text-[#ffffff]">
            Nareshcoder
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://github.com/Naresh-Front-dev"
            className="hover:text-[#000000]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/naresh-developer/"
            className="hover:text-[#000000]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/n_a_r_e_s_h____sri__/"
            className="hover:text-[#000000]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
