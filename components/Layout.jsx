import React from "react";
import Main from "./Main";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <div className="pt-[60px] flex w-full text-gray-300">
      <SideMenu />
      <Main />
    </div>
  );
};

export default Layout;
