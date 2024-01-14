"use client";

import Image from "next/image";
import Link from "next/link";
import Usericon from "../components/icons/Usericon";
import Cardicon from "./icons/Cardicon";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-[#feb9b9] from-0% to-[#FCFCFC] to-100% flex items-center justify-between z-100">
        <div>
          <Link href="/">
            <Image src="/LOGO.png" width={70} height={20} alt="logo" />
          </Link>
        </div>

        <nav className="flex items-center justify-between ">
          <ul className="hidden md:flex  gap-6 font-semibold text-gray-500 sm:hidden ">
            <Link className="text-green-500" href={"/"}>
              Home
            </Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/order"}>Order</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </nav>

        <div className="absolute right-40 cursor-pointer md:right-40 xl:right-72 ">
          <Cardicon />
        </div>


        <nav className="flex items-center gap-4 font-semibold">
          <Link
            href="/sign-in"
            className="flex items-center text-white gap-1 bg-slate-400 px-6 py-2 rounded-full shadow-md"
          >
            <Usericon /> Logins </Link>


          <Link
            href="/register"
            className="hidden  flex items-center text-white gap-1 bg-green-500 px-6  py-2  rounded-full  shadow-md lg:hidden sm:hidden"
          >
            <Usericon /> Register{" "}
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
