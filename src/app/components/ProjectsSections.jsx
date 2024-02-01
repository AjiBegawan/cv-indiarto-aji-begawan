"use client";

import React from "react";
import { projectList } from "../utils/projectsList";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon, GlobeIcon } from "@radix-ui/react-icons";

const ProjectSections = () => {
  return (
    <section id="projects" className="h-full  mb-10">
      <div className=" justify-center text-3xl  pt-24 pb-5 ">
        <h1 className="text-3xl font-bold text-center">
          <span className="bg-[#64A9A5] px-2 text-white">Projects</span>
        </h1>
        <p className="text-center text-sm py-3 text-slate-300 tracking-[.3em]">
          Where curiosity meets creation
        </p>
      </div>
      <div className=" px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {projectList.map((project) => {
            return (
              <div key={project.id}>
                <div className="border rounded-md hover:shadow-xl  p-7">
                  <div className="text-center font-medium text-xl py-3 text-[#64A9A5]">
                    {project.name}
                  </div>
                  <div className="flex justify-center">
                    <div className="group relative ">
                      <Image
                        src={project.projectImageUrl}
                        alt={project.name}
                        height={350}
                        width={350}
                        className="rounded-md"
                      />
                      <div className="overlay rounded-md items-center justify-center absolute transition-all duration-500 top-0 left-0 w-full h-full backdrop-blur-sm bg-white bg-opacity-30 hidden group-hover:flex ">
                        <Link
                          href={project.projectLink}
                          target="_blank"
                          className="text-center pt-5"
                        >
                          <button className="rounded-md border-2 border-[#64A9A5] bg-white  px-3 py-2 font-light text-[#64A9A5] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[-4px_4px_0px_teal] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <p>Visit Project</p>
                          </button>
                          {/* <p>Visit Project</p> */}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-sm text-slate-400 p-4">
                    {project.description}
                  </div>
                  {/* <div className="flex justify-center">
                    <Link
                      href={project.projectLink}
                      target="_blank"
                      className="text-center pt-5"
                    >
                      <button className="rounded-md border-2 border-[#64A9A5]  px-3 py-2 font-light text-[#64A9A5] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[-4px_4px_0px_teal] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                        <p>Visit Project</p>
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSections;
