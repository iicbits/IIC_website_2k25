import React from "react";

const Footer = () => {
  return (
    <footer className="footer w-full flex justify-center items-center flex-col py-10">
      <div className="max-w-7xl w-full flex flex-col ">
        <div className="w-full flex justify-center mb-10">
          <p className="h-[1px] w-full bg-secondary"></p>
        </div>

        <div className=" flex flex-col justify-center">
          <div className="mb-2">
            <h1 className="font-bold opacity-90 mb-1">MEET</h1>
            <p className="flex flex-col mb-2 text-secondary">
              <span className="">Incubation Centre, IT Building</span>
              <span className="">BIT Sindri, Jharkhand</span>
            </p>
          </div>
          <div className="">
            <h1 className="font-bold opacity-90 mb-1">CONTACT</h1>
            <p className="text-secondary">
              {/* <MdEmail /> */}
              <span className="">iicbits@bitsindri.ac.in</span>
            </p>
            <p className="text-secondary">
              {/* <MdPhone /> */}
              <span className="">+91 620 220 1234</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full mt-10 text-sm text-secondary">
          <p className="">
            Copyright &copy; 2025 IIC BIT Sindri | All Rights Reserved.
          </p>
          <p>Designed and Developed by IICBITS Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
