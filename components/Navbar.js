import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({mobileMenu}) {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    useEffect(() => {
        setMounted(true);
    }, []);

    function setMobileNav(isMobileNavOpen) {
        setIsNavOpen(isMobileNavOpen);
        document.body.classList.toggle('overflow-hidden', isMobileNavOpen);
        document.body.classList.toggle('max-h-screen', isMobileNavOpen);
    }


    return (
        <>
            <div
                className="w-full z-50 top-0 py-3 sm:py-5  absolute sticky bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to ">
                <div className="container flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <picture>
                                <img alt="logo image" className="h-12 lg:h-16" src="/logo.png"/>
                            </picture>
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex items-center">
                            <li className="group pl-6">
                                <Link href={"#about"} scroll={false}
                                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</Link>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>
                            <li className="group pl-6">
                                <Link href={"#services"} scroll={false}
                                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</Link>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                                <Link href={"#portfolio"} scroll={false}
                                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</Link></span>
                                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                            </li>

                            <li className="group pl-6">
                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Clients</span>
                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">
                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Work</span>
                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">
                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Statistics</span>
                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">
                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Blog</span>
                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>

                            <li className="group pl-6">
                            <span
                                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Contact</span>
                                <span
                                    className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
                                ></span>
                            </li>
                        </ul>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={() => {
                            setMobileNav(true);
                        }}>
                            <i className="bx bx-menu text-4xl text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity lg:hidden ${isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">

                    <button onClick={() => {
                        setMobileNav(false);
                    }} className="absolute top-0 right-0 mt-4 mr-4"
                    ><i className="bx bx-x text-4xl text-white"></i>
                    </button>

                    <ul className="mt-8 flex flex-col">

                        <li className="py-2">

                            <Link href={"#about"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >About</Link>
                        </li>

                        <li className="py-2">

                            <Link href={"#services"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Services
                            </Link>
                        </li>

                        <li className="py-2">

                            <Link href={"#portfolio"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Portfolio</Link>
                        </li>

                        <li className="py-2">

                            <Link href={"#services"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Clients
                            </Link>
                        </li>

                        <li className="py-2">

                            <Link href={"#services"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Work
                            </Link>
                        </li>

                        <li className="py-2">

                            <Link href={"#services"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Statistics
                            </Link>


                        </li>

                        <li className="py-2">

                            <Link href={"#services"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Blog
                            </Link>
                        </li>

                        <li className="py-2">

                            <Link href={"#services"} scroll={false} onClick={() => {
                                setMobileNav(false);
                            }} className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                            >Contact
                            </Link>

                        </li>

                    </ul>
                </div>
            </div>
        </>
    )

}
