import React from 'react';
import Navbar from '../components/Navbar';
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaPlus,
} from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import anime from '../../data';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-6 gap-3">
        <div className="col-span-6 w-full h-auto my-9 px-6">
          <img
            src="https://wallpapers.com/images/featured/c0pujiakubq5rwas.jpg"
            alt="logo"
            className="w-full h-[210px] object-cover hidden md:flex"
          />
          <div className="flex justify-center -translate-y-8">
            <input
              type="text"
              placeholder="Enter Anime Name..."
              className="w-full bg-[#444] text-[#fff] border-[#444] md:border-white md:bg-white md:w-2/3 h-9 md:h-16 outline-none border p-3 px-6 md:text-black text-sm md:text-lg"
            />
          </div>
        </div>
        <div className="col-span-6 px-6">
          <h3 className="text-lg font-medium uppercase">Watch Anime Online</h3>
          <p className="text-sm text-[#aaa] my-2">
            AnimeSuge is a free streaming anime website that allows you to watch
            anime online in English subbed and dubbed. Join us and watch anime
            online for free with ease. Easy access and no registration is
            required. Our content is updated daily with fast streaming servers
            and great features that help you easily track and watch your
            favorite anime. We are confident AnimeSuge is the best free anime
            streaming site in the space that you can't simply miss!
          </p>
          <p className="text-sm text-[#aaa]">
            Please help us by sharing this site with your friends. Thanks!
          </p>
          <div className="my-1 flex">
            <button className="border border-[#444] mr-1 p-1 px-2 md:px-3 bg-[#444] text-[10px] font-medium hover:-translate-y-1 duration-200 transition-all ease-in flex items-center">
              <FaFacebookF size={12} className="md:mr-1 mr-0" />
              <span className="md:block hidden">Facebook</span>
            </button>
            <button className="border border-[#444] mr-1 p-1 px-2 md:px-3 bg-[#444] text-[10px] font-medium hover:-translate-y-1 duration-200 transition-all ease-in flex items-center">
              <FaTwitter size={12} className="md:mr-1 mr-0" />
              <span className="md:block hidden"> Twitter</span>
            </button>
            <button className="border border-[#444] mr-1 p-1 px-2 md:px-3 bg-[#444] text-[10px] font-medium hover:-translate-y-1 duration-200 transition-all ease-in flex items-center">
              <FaPinterestP size={12} className="md:mr-1 mr-0" />
              <span className="md:block hidden"> Pinterest</span>
            </button>
            <button className="border border-[#444] mr-1 p-1 px-2 md:px-3 bg-[#444] text-[10px] font-medium hover:-translate-y-1 duration-200 transition-all ease-in flex items-center">
              <FaTelegramPlane size={12} className="md:mr-1 mr-0" />
              <span className="md:block hidden"> Telegram</span>
            </button>
            <button className="border border-[#444] mr-1 p-1 px-2 md:px-3 bg-[#444] text-[10px] font-medium hover:-translate-y-1 duration-200 transition-all ease-in flex items-center">
              <FaFacebookMessenger size={12} className="md:mr-1 mr-0" />
              <span className="md:block hidden"> Message</span>
            </button>
            <button className="border border-[#444] mr-1 p-1 px-2 md:px-3 bg-[#444] text-[10px] font-medium flex items-center">
              <FaPlus size={12} className="md:mr-1 mr-0" />
              <span className="md:block hidden">More</span>
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-3 px-6 mt-9">
        <div className="col-span-6 flex justify-between items-center md:items-end">
          <div className="flex flex-col md:flex-row md:items-end">
            <h3 className="text-xl font-medium uppercase mr-9">
              Recently <br /> Updated
            </h3>
            <div className="text-md translate-y-2 my-2 text-[#aaaaaa6d]">
              <a href="#" className="mr-3 text-white">
                All
              </a>
              <a href="#" className="mr-3">
                Sub
              </a>
              <a href="#" className="mr-3">
                Dub
              </a>
              <a href="#" className="mr-3">
                Chinese
              </a>
              <a href="#" className="mr-3">
                Trending
              </a>
              <a href="#">Random</a>
            </div>
          </div>
          <div className="flex -translate-y-4 md:translate-y-0">
            <IoIosArrowBack size={22} className="text-[#aaaaaa4c]" />
            <IoIosArrowForward size={22} className="text-white" />
          </div>
        </div>
        {anime.map((item) => {
          return (
            <div className="col-span-3 md:col-span-2 h-[320px] lg:col-span-1 my-3 md:my-6">
              <div
                key={item.id}
                className="w-full h-[300px] relative shadow-sm">
                <a href="#" className="absolute right-0 text-xs bg-[#222] p-1">
                  TV
                </a>
                <a
                  href="#"
                  className="absolute left-0 bottom-0 text-[9px] bg-[#333] p-1">
                  SUB S1
                </a>
                <img
                  src={item.image}
                  alt="poster"
                  className="w-full h-full object-cover"
                />
                <div className="w-full overflow-hidden my-2 px-2 text-center text-md font-medium">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="grid grid-cols-6 gap-3 my-12 px-6">
        <div className="col-span-6 lg:col-span-2 flex flex-col">
          <div className="flex items-end">
            <h3 className="text-xl font-medium uppercase mr-9">
              Recently <br /> Added
            </h3>
            <a href="#" className="underline">
              View All
            </a>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <div className="lg:col-span-6 md:col-span-3 col-span-6">
              <div className="h-24 my-4 flex">
                <img
                  src="https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg"
                  alt="poster"
                  className="w-24 h-22 object-cover"
                />
                <div className="ml-4">
                  <h3>Naruto</h3>
                  <p>MUSIC . SUB / 1 EPS . 3 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex flex-col">
          <div className="flex items-end">
            <h3 className="text-xl font-medium uppercase mr-9">
              Most <br /> Viewed
            </h3>
            <a href="#" className="mr-4">
              Day
            </a>
            <a href="#" className="mr-4">
              Week
            </a>
            <a href="#" className="">
              Month
            </a>
          </div>
          <div className="h-[26rem] md:h-80 lg:h-64 my-4 flex">
            <img
              src="https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg"
              alt="poster"
              className="w-full md:w-1/2 lg:w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 md:col-span-3 col-span-6">
            <div className="h-24 my-1 flex">
              <img
                src="https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg"
                alt="poster"
                className="w-24 h-22 object-cover"
              />
              <div className="ml-4">
                <h3>Naruto</h3>
                <div className="flex">
                  <p className="mr-3">100 4578</p>
                  <p>100 4578</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2 flex flex-col">
          <h3 className="text-xl font-medium uppercase mr-9">
            Just <br /> Completed
          </h3>
          <div className="h-24 my-4 flex">
            <img
              src="https://m.media-amazon.com/images/I/81s+jxE5KEL.jpg"
              alt="poster"
              className="w-24 h-22 object-cover"
            />
            <div className="ml-4">
              <h3>Naruto</h3>
              <p>MUSIC . SUB / 1 EPS . 3 min</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-3 my-12 px-6">
        <div className="col-span-6 h-[0.3px] bg-[#555] w-full"></div>
        <div className='col-span-6'>
          <button className='p-1 bg-[#555]'>EN</button>
          <button className='p-1 bg-[#444]'>JP</button>
        </div>
        <div className='col-span-4 flex justify-between w-full'>
          <a href="#">A_Z List</a>
          <a href="#">Most Watched</a>
          <a href="#">Recently Added</a>
          <a href="#">Uncomming</a>
          <a href="#">FQA</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};
