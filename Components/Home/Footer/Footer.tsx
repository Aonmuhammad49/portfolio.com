import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
    <div>
      <Image src="/images/Logo1.png" alt="logo" width={180} height={180} className="mx-auto" />
    </div>
    <div className="flex items-center flex-wrap justify-center gap-8 text-white font-bold mt-8">
      <div>Home.</div>
      <div>Services.</div>
      <div>Projects.</div>
      <div>Reviews.</div>
      <div>Contact.</div>
    </div>
    <p className="text-white text-opacity-60 mt-6 text-center">
      © 2024 All Rights Reserved by WebDev Warriors
    </p>
  </div>    
  );
};

export default Footer;
