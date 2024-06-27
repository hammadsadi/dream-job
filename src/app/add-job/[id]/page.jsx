import Shap from "@/components/Shared/Shap/Shap";
import Image from "next/image";
import React from "react";
import { IoLogoUsd } from "react-icons/io5";
import companyBanner from "@/assets/images/clinets-profile.png";
import { FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const CreateJob = () => {
  return (
    <div>
      <Shap>
        <form
          noValidate=""
          className="space-y-6 md:max-w-4xl mx-auto border border-slate-50/10 p-4 mt-4 rounded-md"
        >
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="space-y-1 text-sm flex-1">
              <label htmlFor="jobTitle" className="block text-gray-400">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Job Title"
                className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="salary" className="block text-gray-400">
                Salary
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  placeholder="Salary"
                  className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />

                <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                  <IoLogoUsd />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex md:flex-row justify-between flex-col gap-6">
              {/*  */}
              <div>
                <label htmlFor="remote" className="block text-gray-400">
                  Remote?
                </label>
                <div>
                  <input
                    type="radio"
                    id="onSite"
                    name="jobType"
                    value="on-site"
                  />{" "}
                  &nbsp;
                  <label for="onSite">On-Site</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="hybrid"
                    name="jobType"
                    value="hybrid-remote"
                  />{" "}
                  &nbsp;
                  <label for="hybrid">Hybrid-remote</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="fullyRemote"
                    name="jobType"
                    value="fully-remote"
                  />{" "}
                  &nbsp;
                  <label for="hybrid">Fully-remote</label>
                </div>
              </div>
              {/*  Full Time */}
              <div>
                <label htmlFor="remote" className="block text-gray-400">
                  Remote?
                </label>
                <div>
                  <input
                    type="radio"
                    id="onSite"
                    name="jobType"
                    value="on-site"
                  />{" "}
                  &nbsp;
                  <label for="onSite">On-Site</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="hybrid"
                    name="jobType"
                    value="hybrid-remote"
                  />{" "}
                  &nbsp;
                  <label for="hybrid">Hybrid-remote</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="fullyRemote"
                    name="jobType"
                    value="fully-remote"
                  />{" "}
                  &nbsp;
                  <label for="hybrid">Fully-remote</label>
                </div>
              </div>
              {/* Job Banner */}
              <div>
                <label className="block text-gray-400">Job Banner</label>
                {/* <Image
                  src={companyBanner}
                  width={40}
                  height={40}
                  className="w-24 h-24 bg-slate-400"
                  alt="Company Image"
                /> */}
                <div className="w-24 h-24 bg-slate-400 flex justify-center items-center">
                  <small>Banner Image</small>
                </div>
                <input
                  type="file"
                  id="salary"
                  name="banner"
                  className="w-3/5 mt-3 px-2 py-1 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* Location Info */}
          <div>
            <label htmlFor="jobTitle" className="block text-gray-400">
              Location{" "}
            </label>
            <div className="flex gap-2 flex-col md:flex-row justify-between items-center">
              <div className="space-y-1 text-sm">
                <input
                  type="text"
                  name="country"
                  id="jobTitle"
                  placeholder="Country Name"
                  className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
              <div className="space-y-1 text-sm">
                <div className="relative">
                  <input
                    type="text"
                    id="salary"
                    name="state"
                    placeholder="State Name"
                    className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="relative">
                  <input
                    type="text"
                    id="salary"
                    name="city"
                    placeholder="City Name"
                    className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex gap-2 flex-col md:flex-row md:items-center">
            {/* Job Contact Person */}
            <div>
              <label className="block text-gray-400">Contact Person</label>
              {/* <Image
                  src={companyBanner}
                  width={40}
                  height={40}
                  className="w-24 h-24 bg-slate-400"
                  alt="Company Image"
                /> */}
              <div className="w-24 h-24 bg-slate-400 flex justify-center items-center">
                <small> Image</small>
              </div>
              <input
                type="file"
                id="salary"
                name="contactPersonImage"
                className="w-4/5 mt-3 px-2 py-1 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
              />
            </div>
            <div className="space-y-1 text-sm">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 start-0-0 grid w-10 place-content-center text-gray-500">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="salary"
                  name="name"
                  placeholder="Name"
                  className="w-full pl-8 pr-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 start-0-0 grid w-10 place-content-center text-gray-500">
                  <IoCallSharp />
                </span>
                <input
                  type="text"
                  id="salary"
                  name="number"
                  placeholder="Mobile Number"
                  className="w-full pl-8 pr-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 start-0-0 grid w-10 place-content-center text-gray-500">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  id="salary"
                  name="email"
                  placeholder="Email"
                  className="w-full pl-8 pr-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="space-y-1 text-sm">
              <div className="">
                <textarea
                  name=""
                  id=""
                  placeholder="Job Description"
                  className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center w-full flex justify-center items-center">
            <button
              className={` p-3 text-center rounded-sm text-white hover:bg-slate-50/10 border border-slate-50/10 flex justify-center items-center gap-1`}
            >
              Post Job
            </button>
          </div>
        </form>
      </Shap>
    </div>
  );
};

export default CreateJob;
