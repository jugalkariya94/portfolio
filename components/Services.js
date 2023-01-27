import userData from '@constants/data'
import React from "react";
import Link from "next/link";
export default function Services() {
  return (
      <div className="container py-20 md:py-40" id="services">
        <h2
            className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          Here's what I'm good at
        </h2>
        <h3
            className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          These are the services I offer
        </h3>

        <div
            className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
        >
          {userData.services.map((service) => (
              <div className="group rounded px-8 py-12 shadow hover:bg-primary">
                <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                  <div className="hidden group-hover:block">
                    <img
                        alt="development icon"
                        src={service.iconHover}
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <img
                        alt="development icon"
                        src={service.icon}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3
                      className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl"
                  >
                    {service.title}
                  </h3>
                  <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>

          ))}
        </div>
      </div>
  );
}
