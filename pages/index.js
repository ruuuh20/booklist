import React, { useState } from "react";
import Layout from "@/components/layout.js";
import Header from "@/components/header.js";
import Footer from "@/components/footer.js";
import Container from "@/components/container.js";
import { fade } from "@/helpers/transitions.js";
import { LazyMotion, domAnimation, m } from "framer-motion";
import useInvite from "@/components/hooks/useInvite.ts";
import { createClient } from "../prismicio";
import Image from "next/image";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import AssignmentsList from "../components/assignmentsList.js";

import PhoneIcon from "@/components/phoneIcon";
import MapIcon from "../components/mapIcon";
import MailIcon from "../components/mailIcon";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getAllByType("page");

  return {
    props: { page }, // Will be passed to the page component as props
  };
}

export default function Home({ page }) {
  const { inviteResponse, error, updating, updateRsvp } = useInvite();
  const [isActive, setIsActive] = useState(false);
  const [value, onChange] = useState(new Date());
  const accordionData = {
    title: "Comments/Feedback",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { title, content } = accordionData;

  if (error) {
    return <div>{error}</div>;
  }
  if (!inviteResponse) {
    return <div>Loading... </div>;
  }
  function onRsvpChange(e) {
    const purchasing = e.target.value === "yes";
    updateRsvp(purchasing);
  }

  return (
    <Layout>
      <Header />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <div className="relative h-full overflow-hidden overflow-y-auto md:flex">
              <aside className="aside-left w-full md:w-[480px]">
                <div className="relative main-menu text-darkgray">
                  <div className="mt-6 rounded-30 widget">
                    <h2 className="title-text text-[2.6rem] font-bold">
                      Superbooks Academy
                    </h2>
                    <p className="text-[18px]">Welcome 👋</p>
                  </div>
                  <div className="mt-6 rounded-30 widget">
                    {" "}
                    <h2 className="mb-4 text-2xl font-bold">
                      2022 Fall Semester
                    </h2>
                    <h4 className="text-xl font-bold">
                      Sept 5 - Jane 10, 2022
                    </h4>
                    <div className="py-2 my-2 border-t border-gray-400 row">
                      <p className="mb-2 text-base uppercase">Report Card</p>
                      <a
                        href="https://studentreportwrapped.netlify.app/card"
                        target="_blank"
                        rel="noreferrer"
                        className="bg- rounded-lg p-1 block w-[90px]"
                      >
                        <div className="flex justify-center sidebar-img">
                          <Image
                            src="/reportcard.png"
                            alt="Report Card"
                            width="75"
                            height="90"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="py-2 my-2 row"> <p className="mb-2 text-base uppercase">Attendance</p>
                    <p>100%</p>
                     <div className="p-6">
                       <Calendar className="cal" onChange={onChange} value={value} /></div>
                     </div>
                    <div>
                      <div className="accordion">
                        <div className="accordion-item">
                          <div
                            className="cursor-pointer accordion-title"
                            onClick={() => setIsActive(!isActive)}
                          >
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={11.3}
                                height={6.9}
                                style={{
                                  enableBackground: "new 0 0 11.3 6.9",
                                }}
                                xmlSpace="preserve"
                                className={`transform opacity-80 transition ease-in-out duration-300 mr-1 ${
                                  isActive ? "rotate-0" : "rotate-[-90deg]"
                                }`}
                              >
                                <path
                                  style={{
                                    fill: "none",
                                    stroke: "#010101",
                                    strokeWidth: 1.25,
                                    strokeMiterlimit: 10,
                                  }}
                                  d="m.6.6 4.9 5.1 5.2-5"
                                />
                              </svg>
                              <span className="font-bold text-gray-800">{title}</span>
                            </div>
                          </div>
                          {isActive && (
                            <div
                              className={`mt-4 accordion-content transition-opacity ease-in-out duration-500 delay-250 ${
                                isActive ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              {content}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-6 leading-8 rounded-30 bg-white widget w-full text-[18px]">
                    <p className="my-2 font-bold">Contact us:</p>
                    <p className="flex justify-between md:pr-16"><PhoneIcon/>(201) 123-4567</p>
                    <p className="flex justify-between md:pr-16"><MailIcon />info@superbooks.edu</p>
                    <p className="flex justify-between md:pr-16"><MapIcon />100 Abc St.</p>
                  </div>
                </div>
              </aside>
              <main className="w-full pl-4">
                <div>
                  <div className="text-darkgray">
                    <h3 className="text-max ">
                      Hello, <strong>{inviteResponse.invite.name}</strong>!
                    </h3>
                    <div className="flex row text-[22px]  mb-4">
                      <div className="flex-auto">
                        <p>
                          You're enrolled in <span className="font-bold text-darkred">{inviteResponse.invite.currentCourse}</span>.
                          The class meets on {inviteResponse.messages.meetings}.
                        </p>
                        <p>  You are currently registered for {inviteResponse.invite.registered}.</p>
                      </div>
                    </div>
                   
                    <div className="flex my-2 row">
                      <div>
                        <fieldset className="" disabled={updating}>
                          <legend className="text-[22px]">
                            {inviteResponse.messages.question}
                          </legend>
                          <label htmlFor="yes" className="my-2 form-control">
                            <input
                              type="radio"
                              id="yes"
                              name="purchasing"
                              value="yes"
                              onChange={onRsvpChange}
                              checked={
                                inviteResponse.invite.purchasing === true
                              }
                            />
                            {inviteResponse.messages.answer1}
                          </label>
                          <label htmlFor="no" className="my-2 form-control">
                            <input
                              type="radio"
                              id="no"
                              name="purchasing"
                              value="no"
                              onChange={onRsvpChange}
                              checked={
                                inviteResponse.invite.purchasing === false
                              }
                            />
                            {inviteResponse.messages.answer2}
                          </label>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <SliceZone
                      slices={page[0].data.slices}
                      components={components}
                    />
                  </div>
                  <AssignmentsList />
                </div>
              </main>
            </div>

            {/* {page.map((p, index) => (
              <div className="pt-16">
                <div className="flex flex-wrap">
                  <h4 className="items-center px-2 text-2xl border border-black rounded-full">
                    <PrismicText field={p.data.title} />
                  </h4>
                </div>
                <div>
                  <SliceZone slices={p.data.slices} components={components} />
                </div>
              </div>
            ))} */}
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
