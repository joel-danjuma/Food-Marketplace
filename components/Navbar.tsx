"use client";
import Link from "next/link";
import Image from "next/image";
import NextLink from "next/link";
import logo from "@/public/logo.png";
import { Kbd } from "@nextui-org/kbd";
// import { FiMenu } from "react-icons/fi";
import { Input } from "@nextui-org/input";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";

// import { SignInButton, SignedIn, UserButton, useSession } from "@clerk/nextjs";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

function Navbar() {
  // const { session } = useSession();
  // const [toggleDropdown, setToggleDropdown] = useState(false);
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search Fresh Produce and Spices"
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      isBordered
      className="bg-[#EDEAE7] p-4"
    >
      <NavbarContent
        className="basis-1/5 sm:basis-full relative"
        justify="start"
      >
        {/* <NavbarMenuToggle className="lg:flex hidden" /> */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Image src={logo} alt="logo" width={12} height={12}></Image>
            <p className="font-bold text-green-500 text-2xl">Gwaree</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem className="hidden w-[600px] lg:flex">
          {searchInput}
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent
      className="hidden sm:flex basis-1/5 sm:basis-full items-center"
      justify="end"
    >
      <NavbarItem className="hidden sm:flex gap-2">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarItem>
    </NavbarContent> */}

      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch className="text-green-500" />
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>

      <NavbarMenu className="lg:flex flex pt-12 ">
        <NavbarMenuItem className="lg:hidden flex">
          {searchInput}
        </NavbarMenuItem>

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                // size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
    // <nav className="fixed w-full z-30 ">
    //   <div className="hidden lg:flex flex-row justify-center items-center text-lg font-medium bg-[#F9F8F8] bg-opacity-95 text-green-500 w-full h-14 relative">
    //     {/* Desktop Navigation */}
    //     <a
    //       href="/"
    //       className=" absolute left-5 flex flex-row justify-between gap-4"
    //     >
    //       <Image src={logo} alt="logo" className="w-3 h-7 lg:hidden" />
    //       <h1 className="text-green-500 lg:block hidden">Gwaree</h1>
    //     </a>

    //     <div>
    //       <Link
    //         href="/about"
    //         className="px-2 py-2 text-sm font-medium hover:text-[#50d236] lg:px-6 md:px-3 lg:ml-auto"
    //       >
    //         About
    //       </Link>
    //       <Link
    //         href="/shop"
    //         className="px-2 py-2 text-sm font-medium hover:text-[#50d236] lg:px-6 md:px-3"
    //       >
    //         Shop
    //       </Link>
    //       <Link
    //         href="/contact"
    //         className="px-2 py-2 text-sm font-medium  hover:text-[#50d236] lg:px-6 md:px-3"
    //       >
    //         Contact
    //       </Link>
    //     </div>
    //     {session?.user ? (
    //       <div className="flex flex-row absolute right-5">
    //         <SignedIn>
    //           <UserButton afterSignOutUrl="/" />
    //         </SignedIn>
    //       </div>
    //     ) : (
    //       <div className="flex flex-row absolute right-5">
    //         <SignInButton mode="modal">
    //           <button className="block px-4 py-2 mt-2 text-sm  hover:text-[#50d236] focus:outline-none focus:shadow-outline md:mt-0">
    //             Sign In
    //           </button>
    //         </SignInButton>

    //         {/* <button className="text-green-500 hover:bg-[#50d236] hover:text-white hover:rounded-xl p-2 text-sm py-2">
    //         Sign Up
    //       </button> */}
    //       </div>
    //     )}
    //   </div>

    //   {/* Mobile Navigation */}

    //   <div className="lg:hidden flex flex-row justify-between bg-[#EDEAE7] p-2 text-[#50d236] w-full h-12 relative">
    //     <Link
    //       href="/"
    //       className="pl-2"
    //       onClick={() => {
    //         setToggleDropdown(false);
    //       }}
    //     >
    //       <Image src={logo} alt="logo" className="w-3 h-7" />
    //     </Link>

    //     <button
    //       className="text-3xl pr-2"
    //       onClick={() => {
    //         setToggleDropdown((prev) => !prev);
    //       }}
    //     >
    //       <FiMenu />
    //     </button>
    //   </div>
    //   {toggleDropdown && (
    //     <div className="h-[70vh] w-full bg-[#EDEAE7] flex flex-col gap-2 justify-center z-20 rounded-b-xl ">
    //       <div className="w-full h-2/4 flex flex-col gap-4 pt-4 items-center text-xl">
    //         <Link
    //           href="/about"
    //           onClick={() => {
    //             setToggleDropdown(false);
    //           }}
    //         >
    //           <span>About</span>
    //         </Link>
    //         <Link
    //           href="/shop"
    //           onClick={() => {
    //             setToggleDropdown(false);
    //           }}
    //         >
    //           <span>Shop</span>
    //         </Link>
    //         <Link
    //           href="/contact"
    //           onClick={() => {
    //             setToggleDropdown(false);
    //           }}
    //         >
    //           <span>Contact</span>
    //         </Link>
    //       </div>
    //     </div>
    //   )}
    // </nav>
  );
}
// className="inline-flex items-center gap-2 list-none lg:ml-auto"
export default Navbar;
