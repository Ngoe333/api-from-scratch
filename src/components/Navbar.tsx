"use client";

import Image from "next/image";
import Link from "next/link";
// import Usericon from "./icons/Usericon";
import Cardicon from "./icons/Cardicon";
import Menuicon from "./icons/Menuicon";
import { useState } from 'react';
import Closeicon from "./icons/Closeicon";

const Header = () => {

  const [showmenu, setShowmenu] = useState(false);

  const handleShowMenu = () => {
    setShowmenu(!showmenu);

  }

  return (
    <div>
      <header className="bg-gradient-to-r from-[#fefefe] from-0% to-[#FCFCFC] to-100% flex items-center justify-between z-100 shadow-md w-full fixed top-0 left-0 px-4  ">
        <div>
          <Link href="/">
            <Image src="/LOGO.png" width={70} height={20} alt="logo" />
          </Link>
        </div>

        <nav className="flex items-center justify-between relative ">
          <ul className="hidden md:flex  gap-6 font-semibold text-gray-500 absolute -left-60  sm:hidden ">
            <Link className="text-green-500" href={"/"}>
              Home
            </Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/order"}>Order</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>

        </nav>

        <div className="absolute right-48 cursor-pointer md:right-44 xl:right-60 ">
          <Cardicon />
        </div>


        <nav className="flex items-center gap-4 font-semibold">



          <Link
            href="/sign-in"
            className="flex items-center text-white gap-1 bg-blue-400 px-6 py-2 rounded-full shadow-md absolute right-20 md:right-16"
          >
            Login </Link>
        </nav>
        <div onClick={handleShowMenu} className='visible cursor-pointer xl:hidden md:hidden '>
          <Menuicon />
        </div>

        <div className={
          showmenu ? 'fixed right-0 top-0 w-[65%] h-[600px] rounded-tl-3xl rounded-bl-3xl  bg-[#ecf0f3] p-10 ease-in duration-500 z-10'
            : 'fixed right-[-100%] top-0 ease-in duration-500'
        }>

          <div className='flex w-full items-center justify-end relative'>
            <div onClick={handleShowMenu} className='cursor-pointer absolute -top-6'>
              <Closeicon />
            </div>

            <div className='flex-col py-4'>

              <ul className='flex-col py-4 flex '>
                <Link onClick={() => setShowmenu(false)} className="text-green-500 py-4 cursor-pointer text-lg font-semibold" href={"/"}>
                  Home
                </Link>
                <Link onClick={() => setShowmenu(false)} className='py-4 cursor-pointer text-lg font-semibold' href={"/menu"}>Menu</Link>
                <Link onClick={() => setShowmenu(false)} className='py-4 cursor-pointer  text-lg font-semibold' href={"/order"}>Order</Link>
                <Link onClick={() => setShowmenu(false)} className='py-4 cursor-pointer text-lg font-semibold' href={"/about"}>About</Link>
                <Link onClick={() => setShowmenu(false)} className='py-4 cursor-pointer text-lg font-semibold' href={"/contact"}>Contact</Link>
              </ul>

            </div>

            <div>
              <footer className="footer items-center p-4 xl:px24 py-10 px-4 flex-row-reverse flex justify-between gap-4 relative ">

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end absolute -bottom-40">

                  <Link href='https://facebook.com/marketexpress237'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current cursor-pointe text-green-500"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  
                  </Link>

                  <Link href='https://facebook.com/marketexpress237'>
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current cursor-pointer text-green-500"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    
                  </Link>


                  <Link href='https://facebook.com/marketexpress237'>
                    
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current cursor-pointer text-green-500"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    
                  </Link>


                </nav>
              </footer>
            </div>

          </div>

        </div>


      </header>
    </div>
  );
};

export default Header;
