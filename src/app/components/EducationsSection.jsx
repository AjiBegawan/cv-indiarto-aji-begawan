"use client";

import React from "react";
import { educationList } from "../utils/educationsList";
import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { certificateList } from "../utils/certificatesList";

const EducationsSection = () => {
  return (
    <section
      id="educations"
      className="h-full mb-10 container flex justify-center "
    >
      <div className="w-5/6">
        <div className=" justify-center text-3xl  pt-24 pb-5 ">
          <h1 className="text-3xl font-bold text-center">
            <span className="bg-[#64A9A5] px-2 text-white">Educations</span>
          </h1>
          <p className="text-center text-sm py-3 text-slate-300 tracking-[.3em]">
            Learning that transforms lives, not just grades
          </p>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2">
          {educationList.map((education) => {
            return (
              <div key={education.id}>
                <div>
                  <span className="flex justify-center gap-1">
                    {education.degree === "school" ? (
                      <BookOpenIcon width={25} height={25} />
                    ) : (
                      <AcademicCapIcon width={25} height={25} />
                    )}
                    <h1 className="font-semibold text-lg justify-center">
                      {education.schoolName}
                    </h1>
                  </span>
                  <p className="text-center text-lg">{education.major}</p>
                  <p className="text-center text-md">{education.gpa}</p>
                  <p className="text-center text-md">{education.year}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className=" justify-center  pt-6 pb-5 ">
            <h1 className="text-3xl font-bold text-center">
              <span className="bg-[#FCC7B7] px-2 text-black text-xl">
                Certifications
              </span>
            </h1>
          </div>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-5">
            {certificateList.map((certificate) => {
              return (
                <div key={certificate.id}>
                  <div className="flex justify-start gap-2 py-2">
                    <Image
                      src={certificate.icon}
                      alt={certificate.name}
                      width={20}
                      height={20}
                    />
                    <p className="text-sm">{certificate.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationsSection;
