"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Session, User } from "next-auth";
import UserAccountNav from "@/components/UserAccountNav"

const Header = ( { session  } : { session : Session | null}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [select, setSelect ] = useState({'home' : true, 'blogs' : false, 'resources' : false })

   
  return (
    <nav>
      <div className="my-3 flex justify-between items-center border-b border-red-100 py-2">
        <Link href="/">
          <div className="left flex space-x-4 items-center px-2"
          onClick={() => {
            setSelect({
              'home' : true,
              'blogs' : false,
              'resources' : false,
            })
          }}>
            <Image
              src="/logo.png"
              alt="Pick Turkish Logo"
              width={32}
              height={32}
              className="rounded-tr-sm cursor-pointer"
            />

            <h1 className="text-xl text-center font-medium text-red-500 cursor-pointer">
              Pick Turkish
            </h1>
          </div>
        </Link>

        {/* Desktop Navbar */}
        <div className="right hidden sm:flex px-2">
          <ul className="flex space-x-5 md:space-x-10 ">
            <li className="px-2 py-1">
              <Link
                href="/"
                className={`${select.home ? "text-red-500" : "text-gray-700" }  hover:text-red-500 transition-all ease-in-out duration-200`}
                onClick={() => {
                  setSelect({
                    'home' : true,
                    'blogs' : false,
                    'resources' : false,
                  })
                }}
              >
                Home
              </Link>
            </li>
            <li className="px-2 py-1">
              <Link
                href="/posts/all"
                className={`${select.blogs ? "text-red-500" : "text-gray-700" }  hover:text-red-500 transition-all ease-in-out duration-200`}
                onClick={() => {
                  setSelect({
                    'home' : false,
                    'blogs' : true,
                    'resources' : false,
                  })
                }}
              >
                Blogs
              </Link>
            </li>
            <li className="px-2 py-1">
              <Link
                href="/resources"
                className={`${select.resources ? "text-red-500" : "text-gray-700" }  hover:text-red-500 transition-all ease-in-out duration-200`}
                onClick={() => {
                  setSelect({
                    'home' : false,
                    'blogs' : false,
                    'resources' : true,
                  })
                }}
              >
                Resources
              </Link>
            </li>
            <li className={`${session?.user ? "" : "px-2 py-1 border rounded-md border-red-300"}` } >
              {session?.user  ? <UserAccountNav /> : <Link
                href="/signin"
                className="text-gray-700  hover:text-red-500 transition-all ease-in-out duration-200"
              >
                Sign In
              </Link>}
            </li>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div
          className={classNames(`tham tham-e-squeeze tham-w-6 sm:hidden`, {
            "tham-active": isMenuOpen,
          })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="tham-box">
            <div className="tham-inner bg-red-500" />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="right flex flex-col sm:hidden px-2">
          <ul className="flex flex-col space-y-5 md:space-y-10 ">
            <li className="px-2 py-1">
              <Link
                href="/"
                className={`${select.home ? "text-red-500" : "text-gray-700" }  hover:text-red-500 transition-all ease-in-out duration-200`}
                onClick={() => {
                  setSelect({
                    'home' : true,
                    'blogs' : false,
                    'resources' : false,
                  });
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="px-2 py-1">
              <Link
                href="/posts/all"
                className={`${select.blogs ? "text-red-500" : "text-gray-700" }  hover:text-red-500 transition-all ease-in-out duration-200`}
                onClick={() => {
                  setSelect({
                    'home' : false,
                    'blogs' : true,
                    'resources' : false,
                  });
                  setIsMenuOpen(false);
                }}
              >
                Blogs
              </Link>
            </li>
            <li className="px-2 py-1">
              <Link
                href="/resources"
                className={`${select.resources ? "text-red-500" : "text-gray-700" }  hover:text-red-500 transition-all ease-in-out duration-200`}
                onClick={() => {
                  setSelect({
                    'home' : false,
                    'blogs' : false,
                    'resources' : true,
                  });
                  setIsMenuOpen(false);
                }}
              >
                Resources
              </Link>
            </li>
            <li className="px-2 py-1 border w-20 text-center rounded-md border-red-300">
              <Link
                href="/signin"
                className="text-gray-700  hover:text-red-500 transition-all ease-in-out duration-200"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
