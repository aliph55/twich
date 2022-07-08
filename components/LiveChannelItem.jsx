import Image from "next/image";
import React from "react";

const LiveChannelItem = ({ img, title, profile_img, user, game }) => {
  return (
    <div className="p-2">
      <Image src={img} />
      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            alt="/"
            src={profile_img}
            height="60"
            width="60"
            className="rounded-full"
          />
        </div>
        <div className="">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm text-gray-500">{user}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveChannelItem;
