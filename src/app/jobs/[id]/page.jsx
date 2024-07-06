import Shap from "@/components/Shared/Shap/Shap";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";

const getSingleJob = async (id) => {
  const res = await fetch(`http://localhost:3000/api/jobs/${id}`);
  return res.json();
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
                src={job?.banner}
                height={100}
                width={100}
                className="w-full h-44 md:h-96 object-cover rounded-md"
                alt={job?.jobTitle}
              />
              <Image
                src={job?.logo}
                width={50}
                height={50}
                className="absolute -bottom-4 left-4 border-2 object-cover md:-bottom-10 md:left-10 w-12 h-12 rounded-full md:w-24 md:h-24"
                alt="Logo"
              />
            </div>
            <div className="mt-6 md:mt-12 md:px-10 px-4">
              <div>
                <h4 className="text-xl">{job?.jobTitle}</h4>
                <p className="text-sm">Spotify</p>
                <div className="flex flex-row gap-1 text-sm text-gray-300 mt-4">
                  <p className="capitalize">{job?.jobType} </p> &middot;
                  <p>
                    {job?.state},{job?.country}
                  </p>{" "}
                  &middot;
                  <p className="capitalize">{job?.workTime} </p>
                </div>
                <div className="grid md:grid-cols-6 grid-cols-1 gap-8 mt-4 md:mt-12">
                  {/* Job Desc */}
                  <div className="md:col-span-4">
                    <h4 className="text-xl">Details</h4>
                    <p className="text-base mt-2">{job?.description}</p>
                  </div>
                  {/* Apply Section */}
                  <div className="md:col-span-2">
                    <div className="space-y-6 bg-[#18181B] p-6 rounded-md">
                      <div>
                        <p className="flex items-center gap-1 text-sm">
                          <FaMapMarkerAlt />{" "}
                          <span>
                            {job?.city} {job?.state} {job?.country}
                          </span>
                        </p>
                        <div>
                          <h2 className="flex items-center gap-1 text-xl font-bold mt-3 md:text-3xl">
                            <IoLogoUsd /> <span>{job?.salary}</span>
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
                          value={job?.jobType}
                          className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none capitalize"
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
                          value={job.workTime}
                          className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none capitalize"
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
