import userData from '@constants/data'
import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-20 md:py-40 lg:flex-row">
                <div className="w-full text-center lg:text-left">
                    <h2
                        className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
                    >
                        Who am I?
                    </h2>
                    <h4
                        className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
                    >
                        I&apos;m Jugal Kariya, a Full-stack developer
                    </h4>
                    <p className="pt-6 font-body leading-relaxed text-grey-20">
                        As a web developer with mad skills in Laravel, VueJS, and ReactJS, I&apos;m the superhero your
                        business needs to elevate its online presence. I can turn your ordinary website into a soaring
                        success, taking it from zero to hero with lightning-fast speed and super smooth functionality.
                        Plus, my powers don&apos;t stop at just the technical stuff – I&apos;ve got a creative streak that helps
                        me craft visually stunning sites that&apos;ll leave your competitors green with envy. So if you&apos;re
                        ready to join forces with a web development superhero, let&apos;s team up and take your online
                        presence to new heights!
                    </p>
                    <div
                        className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start"
                    >
                        <div className="flex items-center justify-center sm:justify-start">
                            <p className="font-body text-lg font-semibold uppercase text-grey-20">
                                Connect with me
                            </p>
                            <div className="hidden sm:block">
                                <i className="bx bx-chevron-right text-2xl text-primary"></i>
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
                        >
                            <Link href={userData.socialLinks.facebook}>
                                <i
                                    className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"
                                ></i>
                            </Link>
                            <Link className="pl-4" href={userData.socialLinks.twitter}>
                                <i
                                    className="bx bxl-twitter text-2xl text-primary hover:text-yellow"
                                ></i>
                            </Link>
                            <Link className="pl-4" href={userData.socialLinks.linkedin}>
                                <i
                                    className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"
                                ></i>
                            </Link>
                            <Link className="pl-4" href={userData.socialLinks.github}>
                                <i
                                    className="bx bxl-github text-2xl text-primary hover:text-yellow"
                                ></i>
                            </Link>
                            <Link className="pl-4" href={userData.socialLinks.mail}>
                                <i
                                    className="bx bxs-envelope text-2xl text-primary hover:text-yellow"
                                ></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
