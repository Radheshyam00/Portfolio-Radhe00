import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 my-10 px-5">
          <img
            src="https://cyberdefenders-storage.s3.me-central-1.amazonaws.com/profile-badges/Pagalboy00.png"
            width="300"
          />
          <img
            src="https://tryhackme-badges.s3.amazonaws.com/dead.shut.png"
            alt="Your Image Badge"
            width="330"
          />
        </div>
        <div className="grid grid-cols-auto gap-6 my-10 px-10">
          <Image src={assets.ceh} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.CSA} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.microsoft} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.Fabric} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.AZ_204} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.rhcsa} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.detect} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.cc} alt="" className="w-36 mx-auto mb-2" />
          <Image src={assets.acp} alt="" className="w-36 mx-auto mb-2" />
        </div>

        <div className="w-max flex items-center gap-2 mx-auto mt-10">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          radheshyamjanwa666@gmail.com
        </div>
      </div>
      <div
        className="text-cente sm:flex items-center justify-between 
    border-t border-gray-400 mx-[8%] mt-12 py-6"
      >
        <p>@ 2025 Radheshyam Janwa. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://www.linkedin.com/in/radheshyam-janwa-9a4506227/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/Radheshyam00" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://x.com/RadheshyamRoya1/" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
