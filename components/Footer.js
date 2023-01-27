import React from "react";
import userData from "@constants/data";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
                <p className="text-center font-body text-white md:text-left">
                    © Copyright 2022. Jugal Kariya.
                </p>
                <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                    <Link href={userData.socialLinks.facebook}>
                        <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link className="pl-4" href={userData.socialLinks.twitter}>
                        <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link className="pl-4" href={userData.socialLinks.linkedin}>
                        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link className="pl-4" href={userData.socialLinks.github}>
                        <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                    </Link>
                    <Link className="pl-4" href={userData.socialLinks.mail}>
                        <i className="bx bxs-envelope text-2xl text-white hover:text-yellow"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
