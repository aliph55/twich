import React from "react";
import Hero from "./Hero";
import LiveChannel from "./LiveChannel";
import IconBar from "./IconBar";
import Categories from "./Categories";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannel />
      <IconBar />
      <Categories />
    </div>
  );
};

export default Main;
