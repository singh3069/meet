import QuestionSVG from "../../icons/questionMark.svg";
import ErrormessageSVG from "../../icons/smsFailed.svg";
import SettingsSVG from "../../icons/settings.svg";
import AppsSVG from "../../icons/apps.svg";
import UserSVG from "../../icons/user.svg";
import { Menu } from "@headlessui/react";
import date from "date-and-time";
import { useEffect, useState } from "react";
// import Modal from '../../reusables/Modal';

const DROP_DOWN_DATA = [
  "Help",
  "Terms of Service",
  "Privacy Policy",
  "Terms Summary",
];

function Header() {
  const [now, setNow] = useState(new Date());
  const currentTime = date.format(now, "HH:mm");
  const todaysDate = date.format(now, "ddd,DD MMM");
  
  useEffect(() => {
    var timer = setInterval(() => setNow(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  
  return (
    <div className=" flex justify-around items-center w-full p-3">
      <div className=" w-0 md:w-1/2  pl-3">
        <div className="hidden lg:flex  space-x-1">
          <img
            src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
            alt="logo"
          />
          <a
            href="#/"
            className="cursor-pointer top-2 text-[#5f6368]"
            style={{
              fontSize: "22px",
            }}
          >
            Meet
          </a>
        </div>
      </div>
      <div className="flex  md:items-center w-full md:w-1/2 md:justify-end relative pl-3">
        <div className="md:w-auto text-lg flex  items-center space-x-1 ">
          <p className="text-[#5f6368]">{currentTime}</p>
            <span className="text-[#5f6368]">/</span>
            <p className="text-[#5f6368]">{todaysDate}</p>
        </div>
        <div className="flex items-center justify-center space-x-1 lg:w-40">
          <Dropdown />
          <div className="m-0 p-2.5 rounded-full hover:bg-gray-300">
            <img
              src={ErrormessageSVG}
              alt=""
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </div>

          <div className="m-0 p-2.5 rounded-full hover:bg-gray-300">
            <img
              src={SettingsSVG}
              alt=""
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center md:w-32  justify-center space-x-1">
          <div className="m-0 p-2.5 hidden md:block rounded-full hover:bg-gray-300">
            <img
              src={AppsSVG}
              alt=""
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </div>
          <div className="m-0 p-2.5 rounded-full hover:bg-gray-300">
            <img
              src={UserSVG}
              alt=""
              height={24}
              width={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

export const Dropdown = () => {
  return (
    <Menu as="div" className="flex flex-col">
      <Menu.Button className="m-0 p-2.5 rounded-full hover:bg-gray-300">
        <img
          src={QuestionSVG}
          alt=""
          height={24}
          width={24}
          className="cursor-pointer "
        />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute w-52 top-12 right-60 border bg-white shadow-xl z-10  box-content rounded-md"
      >
        <Menu.Item>
          {({ active }) => (
            <div className="">
              {DROP_DOWN_DATA.map((item, index) => {
                return (
                  <div key={index} className="py-1">
                    <div className="flex space-x-3 items-center p-2 cursor-pointer hover:bg-gray-100">
                      <span>{item}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
