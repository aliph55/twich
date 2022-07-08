import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { rec_channels, top_channels } from "../data/mock-data";

const sideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10]">
      <div className="text-gray-400">
        <p className="hidden xl:flex uppercase font-bold text-sm pb-4">
          Recommented Channels
        </p>
        <p className="">
          <RiMovieLine
            size={20}
            color="text-gray-400"
            className="xl:hidden justify-center w-full"
          />
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div className="">
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            />
          </div>
          <div className="hidden xl:flex items-center justify-between w-full">
            <div className="">
              <p className="">{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="text-gray-400">
              <BsDot size={40} className="flex items-center" color="red" />
              {item.rank}
            </p>
          </div>
        </div>
      ))}
      <div className="text-gray-400">
        <p className="hidden xl:flex uppercase font-bold text-sm pb-4">
          Top Channels
        </p>
        <p className="">
          <RiMovieLine
            size={0}
            color="text-gray-400"
            className="xl:hidden justify-center w-full"
          />
        </p>
      </div>
      {top_channels.map((item, index) => (
        <div className="inline-flex items-center w-full py-[2px]" key={index}>
          <div className="">
            <Image
              src={item.avatar}
              width="50"
              height="50"
              alt={item.username}
            />
          </div>
          <div className="hidden xl:flex items-center justify-between w-full">
            <div className="">
              <p className="">{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="text-gray-400">
              <BsDot size={40} className="flex items-center" color="red" />
              {item.rank}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default sideMenu;
