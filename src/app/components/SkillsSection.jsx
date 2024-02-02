"use client";

import React from "react";
import Image from "next/image";
import { skillsList } from "../utils/skillsList";
import { ComputerDesktopIcon, CpuChipIcon } from "@heroicons/react/24/solid";

const webSkills = skillsList.filter((skill) => skill.position === "web");
const AISkills = skillsList.filter((skill) => skill.position === "ai");

const SkillsSection = () => {
  return (
    <section
      className="flex container pt-24 md:h-dvh h-full justify-center"
      id="skills"
    >
      <div className="w-4/5">
        <div className=" justify-center pb-3">
          <h1 className="text-3xl font-bold text-center">
            <span className="bg-[#64A9A5] px-2 text-white">Skills</span>
          </h1>
          <p className="text-center text-sm py-2 text-slate-300 tracking-[.3em]">
            Invest in yourself, grow your skills, conquer dreams
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="col-span-1">
            <span className="flex justify-center p-1">
              <h1 className="flex text-xl font-bold p-1 bg-[#FCC7B7]">
                <ComputerDesktopIcon
                  width={25}
                  height={25}
                  className="my-auto mr-5"
                />
                Web Development
              </h1>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {webSkills.map((skill, index) => {
                return (
                  <div key={index}>
                    <div className="flex p-1  justify-center md:justify-start">
                      <span className="flex">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={25}
                          height={25}
                        />
                        <h1 className="m-2">{skill.name}</h1>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1">
            <span className="flex justify-center p-1">
              <h1 className="flex text-xl font-bold p-1 bg-[#FCC7B7]">
                <CpuChipIcon width={25} height={25} className="my-auto mr-5" />
                Artificial Intelligence
              </h1>
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {AISkills.map((skill, index) => {
                return (
                  <div key={index}>
                    <div className="flex p-1  justify-center md:justify-start">
                      <span className="flex">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={25}
                          height={25}
                        />
                        <h1 className="m-2">{skill.name}</h1>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
