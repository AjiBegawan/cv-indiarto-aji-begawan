import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { experienceList } from "../utils/experiencesList";

const ExperiencesSection = () => {
  return (
    <section id="experiences" name="experiences">
      <div className="pt-24 px-8">
        <h1 className="text-3xl font-bold text-center mb-3">
          <span className="bg-[#64A9A5] px-2 text-white">Experiences</span>
        </h1>
        <p className="text-center text-md text-slate-300 tracking-[.2em] pb-5">
          Life is not a problem to be solved, but an experience to be lived
        </p>
        {experienceList.map((experience, index) => {
          return (
            <div key={index} className="flex justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-6 border border-slate-100 hover:shadow-xl text-[#021945] transition-all duration-500 my-3 w-11/12">
                <div className="col-span-3 p-10">
                  <span className="flex">
                    <h1 className="text-xl uppercase font-bold bg-[#F6DACC] p-1">
                      {experience.company}
                    </h1>
                  </span>
                  <>
                    {experience.project ? (
                      <h1 className="text-md mb-3">
                        Project {experience.project}
                      </h1>
                    ) : (
                      <></>
                    )}
                  </>
                  <p className="text-md font-medium">{experience.position}</p>
                  <p className="text-sm text-slate-400">
                    {experience.duration}
                  </p>
                  <div className="mt-4">
                    <span className="flex justify-start gap-4 ">
                      {experience.companyLink && (
                        <Link
                          href={experience.companyLink}
                          target="_blank"
                          className="flex "
                        >
                          <button className="rounded-md border-2 border-[#64A9A5] hover:border-[#64A9A5]  px-3 py-1 font-light text-[#64A9A5] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[-4px_4px_0px_teal] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">
                            <span className="flex">
                              <h1 className="text-sm">Visit Company Website</h1>
                              <ArrowUpRightIcon className="ml-2" width={15} />
                            </span>
                          </button>
                        </Link>
                      )}
                      {experience.projectLink && (
                        <Link
                          href={experience.projectLink}
                          target="_blank"
                          className="flex"
                        >
                          <button className="rounded-md border-2 border-[#64A9A5] hover:border-[#64A9A5]  px-4 py-2 font-light text-[#64A9A5] transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[-4px_4px_0px_teal] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">
                            <span className="flex">
                              <h1 className="text-sm">See Project</h1>
                              <ArrowUpRightIcon className="ml-2" width={15} />
                            </span>
                          </button>
                        </Link>
                      )}
                    </span>
                  </div>
                </div>
                <div className="col-span-3">
                  {experience.imageURL ? (
                    <span>
                      <Image
                        src={experience.imageURL}
                        alt={experience.company}
                        width={400}
                        height={400}
                        className=" w-full -z-10"
                      />
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperiencesSection;
