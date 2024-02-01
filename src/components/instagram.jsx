import React from "react";

const Instagram = () => {
  return (
    <div className="flex justify-center fixed bottom-0 w-full h-10">
      <a href="https://www.instagram.com/rafimaliki_/ " target="_blank">
        <div className="flex items-center hover:bg-gray-200 rounded-lg p-1">
          <div className="w-5 h-5">
            <img
              src="src/assets/instagram.png"
              alt="https://www.flaticon.com/free-icons/instagram-logo"
            />
          </div>
          <a className="ml-2">rafimaliki_</a>
        </div>
      </a>
    </div>
  );
};

export default Instagram;
