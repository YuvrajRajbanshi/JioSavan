import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20">
            {/*1st div  */}

            <div className="  flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0">
                <div className=" flex justify-between items-center gap-2 mr-4">
                    <img src="/jioSaavn.jpeg" alt="logo" width={37} />
                    <Link href="/" className="font-extrabold text-lg">
                        JioSaavn
                    </Link>
                </div>

                <div className=" flex text-[24px] lg:text-[15px] gap-5 text-gray-600 font-semibold h-full ">
                    <li className=" list-none">Music</li>
                    <li className=" list-none">Podcast</li>
                    <li className=" list-none">Go Pro</li>
                </div>
            </div>

            {/* 2nd Div */}
            <div className=" hidden lg:flex justify-between items-center gap-4">
                <div className="flex justify-center gap-2">
                    <div className=" flex flex-col text-sm">
                        <span className=" text-[14px] text-gray-600">Music Languages</span>
                        <span className=" text-[12px] text-gray-600 ">Hindi</span>

                    </div>
                    <MdKeyboardArrowDown className=" text-xl text-gray-500 mt-2" />
                </div>

                <div className=" flex text-[15px] gap-5 text-gray-600 font-semibold">
                    <li className="list-none"> Log In </li>
                    <li className="list-none"> Sign Up</li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
