import React from "react";
import Button from '@mui/material/Button';



function Header() {
  return (
    <div className="z-10 text-center w-full flex flex-col items-center bg-cyan-200 gap-8 min-h-max justify-evenly py-[50px] px-[30px]">
      <div className="grid space-y-10 ">
        <p className="text-black text-5xl leading-10 font-bold m-0 max-w-2xl tracking-normal">
         Get Noticed,<span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 p-1"> Get Hired! </span> Create an Outstanding <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-cyan-500">Resume</span> Today!
        </p>
        
        <p className="text-black text-5xl leading-10 font-bold m-auto max-w-lg tracking-widest">
          Build Your Unique Resume. <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500 p-1">Without Any Cost!</span>
        </p>
      </div>
      <Button variant="contained" href="#editor"> Get Started </Button>
    </div>
  );
}

export default Header;
