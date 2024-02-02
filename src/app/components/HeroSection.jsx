/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className=" h-dvh" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center"
        >
          <div className="rounded-full bg-[#64A9A5] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative md:w-[200px] md:h-[200px] mr-10">
            <Image
              src="/images/hero/dpimage.png"
              alt="Hero Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" mb-4 text-4xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600 sm:text-xl lg:text-3xl">
              Hello, I'm{" "}
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                "Indiato Aji Begawan",
                1300,
                "Self-taught Dev",
                1300,
                "Data Scienctist",
                1300,
                "Web Developer",
                1300,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="sm:text-3xl lg:text-6xl text-[#64A9A5]"
            />
          </h1>
          <p className="text-[#A6A6A6] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate graduate with expertise in Data Analysis and
            Visualization, Web Developer, and Machine Learning. A quick learner
            staying updated on industry trends.
          </p>

          <div className="flex flex-row justify-center md:justify-start">
            <Link href="https://linkedin.com/in/indiartoajib" target="_blank">
              <button className="rounded-md border-2 border-[#64A9A5]  px-4 py-2 font-light uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_teal] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <span className="flex">
                  <Image
                    src={"/images/icons/linkedin-icon.svg"}
                    alt="Github Icon"
                    width={25}
                    height={25}
                    className="bg-white rounded-full mr-3"
                  />
                  Linkedin.com
                </span>
              </button>
            </Link>
            <Link
              href="https://github.com/AjiBegawan"
              target="_blank"
              className="px-4"
            >
              <button className="rounded-md border-2 border-[#64A9A5]  px-4 py-2 font-light uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_teal] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                <span className="flex">
                  <Image
                    src={"/images/icons/github-icon.svg"}
                    alt="Github Icon"
                    width={25}
                    height={25}
                    className="bg-white rounded-full mr-3"
                  />
                  Github.com
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
