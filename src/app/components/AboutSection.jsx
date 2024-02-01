"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-3">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "educations",
    content: (
      <ul className="list-disc pl-3">
        <li>Fullstack Academy of Code</li>
        <li>Harvard</li>
        <li>Real Madrid</li>
        <li>Chealsea</li>
        <li>AS Roma</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-3">
        <li>AWS</li>
        <li>Google</li>
        <li>Microsoft</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/about-image.png"
          alt="About Image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            deleniti impedit iure eius exercitationem distinctio magni. Dolorem
            in a consequuntur amet obcaecati rerum, dolore voluptatem. Suscipit
            quasi accusantium illum ab?
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("educations")}
              active={tab === "educations"}
            >
              {" "}
              Educations{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
