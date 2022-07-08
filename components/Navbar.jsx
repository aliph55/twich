import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsThreeDotsVertical, BsSearch, BsPerson } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed h-14 w-full flex flex-nowrap items-center p-4 text-white bg-[#0e0e10] mb-[2px] z-10">
      {/** Left Side */}
      <div className="flex grow items-center justify-start">
        <Link href="/">
          <a className="flex">
            <Image
              src={Logo}
              alt="/"
              width="36"
              height="36"
              className="cursor-pointer z-10"
            />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <BsThreeDotsVertical />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 text-white ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/">
                        <button
                          className={`${
                            active ? "bg-white text-black" : ""
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Account Setting
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-white text-black" : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Soppurt
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-white text-black" : "text-white"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Licence
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/** Midle */}
      <div className="hidden md:flex grow-[2] justify-center items-center">
        <div className=" bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none text-white focus:outline-none"
            />
          </div>
          <div className="">
            <BsSearch />
          </div>
        </div>
      </div>
      {/** Right side */}
      <div className="hidden md:flex grow items-center justify-end">
        {session ? (
          <div className="flex items-center justify-center">
            <p className="">Welcome, {session.user.name}</p>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full bg-transparent justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <Image
                    src={session.user.image}
                    className="rounded-full "
                    width="45"
                    height="45"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 text-white ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-white text-black" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Account
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => signOut()}
                          className={`${
                            active ? "bg-white text-black" : "text-white"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/account">
              <button className="px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2">
                Account
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
      </div>
      {/** Mobile View */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-[#0c0e10] flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[100%] left-0 w-full h-screen bg-[#0c0e10] flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="text-center">
          <li onClick={() => setNav(false)} className="font-bold p-4 text-3xl">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="font-bold p-4 text-3xl">
            <Link href="/#live">Live Channel</Link>
          </li>
          <li onClick={() => setNav(false)} className="font-bold p-4 text-3xl">
            <Link href="/#categories">Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className="font-bold p-4 text-3xl">
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
