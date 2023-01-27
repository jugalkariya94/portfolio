import userData from '@constants/data'
import React from "react";
import Link from "next/link";

export default function Hero() {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-8"
        >
            <div
                className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"
            ></div>

            <div
                className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48"
            >
                <div className="flex flex-col items-center justify-center lg:flex-row">
                    <div className="rounded-full border-8 border-primary shadow-xl">
                        <picture>
                            <img
                                alt="author"
                                className="h-48 rounded-full sm:h-56"
                                src="/avatar.png"
                            />
                        </picture>
                    </div>
                    <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1
                            className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl"
                        >
                            Hello I&apos;m {userData.name}!
                        </h1>
                        <div
                            className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start"
                        >
                            <div
                                className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
                            >
                                <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                                <div className="hidden sm:block">
                                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                            >
                                <Link href={userData.socialLinks.facebook}>
                                    <i
                                        className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                                    ></i>
                                </Link>
                                <Link className="pl-4" href={userData.socialLinks.twitter}>
                                    <i
                                        className="bx bxl-twitter text-2xl text-white hover:text-yellow"
                                    ></i>
                                </Link>
                                <Link className="pl-4" href={userData.socialLinks.linkedin}>
                                    <i
                                        className="bx bxl-linkedin text-2xl text-white hover:text-yellow"
                                    ></i>
                                </Link>
                                <Link className="pl-4" href={userData.socialLinks.github}>
                                    <i
                                        className="bx bxl-github text-2xl text-white hover:text-yellow"
                                    ></i>
                                </Link>
                                <Link className="pl-4" href={userData.socialLinks.mail}>
                                    <i
                                        className="bx bxs-envelope text-2xl text-white hover:text-yellow"
                                    ></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
