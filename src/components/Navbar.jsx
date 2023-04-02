import React from 'react';
import { FaRandom, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center h-20 px-6">
      <div className="font-bold text-3xl">
        <h1>
          Anime<span className="text-red-600">!</span>
        </h1>
      </div>
      <div className="uppercase font-medium text-sm md:flex items-center hidden">
        <a href="#" className="p-1 mx-2">
          genre
        </a>
        <a href="#" className="p-1 mx-2">
          types
        </a>
        <a href="#" className="p-1 mx-2">
          newest
        </a>
        <a href="#" className="p-1 mx-2">
          updated
        </a>
        <a href="#" className="p-1 mx-2">
          ongoing
        </a>
        <a href="#" className="p-1 mx-2">
          added
        </a>
        <a href="#" className="p-1 mx-2">
          <FaRandom />
        </a>
        <a href="#" className="pl-1 ml-2">
          <FaUserCircle size={21} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
