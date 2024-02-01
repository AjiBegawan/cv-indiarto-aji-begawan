/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };

  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   const options = {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-20 gap-4 relative border-4"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
        test
      </div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aperiam
          sint assumenda illo nesciunt quae. Itaque soluta at nihil, assumenda,
          accusantium debitis quam facere officiis aut doloremque, incidunt
          laborum aliquid.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"github.com"}>
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href={"linkedin.com"}>
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="alan.turing@mail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about how we can work together!"
            ></textarea>
          </div>
          {/* <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button> */}
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email Submitted</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
