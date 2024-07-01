// "use client";
// import { useParams } from "next/navigation";
import Shap from "@/components/Shared/Shap/Shap";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";

// Get Single Job
const getSingleJob = async (id) => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/jobs/${id}`
  );
  return data;
};

const JobDetails = async ({ params }) => {
  const { job } = await getSingleJob(params.id);
  console.log(job);

  return (
    <div>
      <Shap>
        <div className=" p-3 md:p-6 rounded-md">
          <div className="mt-4 ">
            <div className="relative">
              <Image
                src={
                  "http://res.cloudinary.com/dq1ey5jg1/image/upload/v1719634619/rcsjq72ffpwpafskm7rx.jpg"
                }
                height={100}
                width={100}
                className="w-full h-44 md:h-96 object-cover rounded-md"
                alt="job"
              />
              <Image
                src={`https://res.cloudinary.com/dq1ey5jg1/image/upload/v1719634619/rcsjq72ffpwpafskm7rx.jpg`}
                width={50}
                height={50}
                className="absolute -bottom-4 left-4 border-2 object-cover md:-bottom-10 md:left-10 w-12 h-12 rounded-full md:w-24 md:h-24"
                alt="Logo"
              />
            </div>
            <div className="mt-6 md:mt-12 md:px-10 px-4">
              <div>
                <h4 className="text-xl">Lorem ipsum dolor sit amet.</h4>
                <p className="text-sm">Spotify</p>
                <div className="flex flex-row gap-1 text-sm text-gray-300 mt-4">
                  <p>Remote </p> &middot;
                  <p>Sylhet,Bangladesh</p> &middot;
                  <p>Full Time </p>
                </div>
                <div className="grid md:grid-cols-6 grid-cols-1 gap-8 mt-4 md:mt-12">
                  {/* Job Desc */}
                  <div className="md:col-span-4">
                    <h4 className="text-xl">Details</h4>
                    <p className="text-base mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam obcaecati praesentium reiciendis suscipit voluptatem
                      eos similique, earum repellat tenetur consequatur, magnam
                      incidunt! Eos minima eveniet corrupti dolorum. Ab
                      consectetur magnam dolores facilis atque nesciunt, hic,
                      ipsam minus soluta maiores exercitationem. Sint explicabo,
                      amet dolore excepturi debitis doloribus id beatae, enim
                      praesentium pariatur minima similique, temporibus rem
                      tempore. Praesentium voluptas molestias consectetur eius
                      ipsam illum, labore tenetur. Ex nemo corrupti sint, culpa
                      nobis rem voluptas minus! Ratione culpa delectus
                      perferendis? Mollitia quidem debitis officiis dolorum
                      ducimus fugiat, reiciendis numquam cupiditate? Delectus
                      et, assumenda veniam totam impedit reprehenderit itaque
                      aut tempore repudiandae.
                    </p>
                  </div>
                  {/* Apply Section */}
                  <div className="md:col-span-2">
                    <div className="space-y-6 bg-[#18181B] p-6 rounded-md">
                      <div>
                        <p className="flex items-center gap-1 text-sm">
                          <FaMapMarkerAlt />{" "}
                          <span>Sylhet Sunamganj Bangladesh</span>
                        </p>
                        <div>
                          <h2 className="flex items-center gap-1 text-xl font-bold mt-3 md:text-3xl">
                            <IoLogoUsd /> <span>100</span>
                          </h2>
                          <p className="text-sm mt-1">Avg Salary</p>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="Job Type"
                          className="block text-gray-400"
                        >
                          Job Type
                        </label>
                        <input
                          type="text"
                          name="Job Type"
                          id="Job Type"
                          value={"Job Type"}
                          className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                          readOnly
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="worktime"
                          className="block text-gray-400"
                        >
                          Work Time
                        </label>
                        <input
                          type="text"
                          name="worktime"
                          id="worktime"
                          value={"Work Time"}
                          className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                          readOnly
                        />
                      </div>
                      <button
                        className={`w-full p-3 text-center rounded-sm text-white hover:bg-slate-50/10 border border-slate-50/10 flex justify-center items-center gap-1`}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shap>
    </div>
  );
};

export default JobDetails;
