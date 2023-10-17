import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-[#e91e1e] py-1 border-1-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between ">
      <Image src="/images/mtpic.png"
                alt="hero image"
                width={50}
                height={10}  
                />
        <p className="text-[#ffffff] ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;