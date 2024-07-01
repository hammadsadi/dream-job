"use client";
import Shap from "@/components/Shared/Shap/Shap";
import Image from "next/image";
import React, { useState } from "react";
import { IoLogoUsd } from "react-icons/io5";
import companyBanner from "@/assets/images/clinets-profile.png";
import { FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useParams } from "next/navigation";
import { toastAlert, uploadImageToCloudinary } from "@/helper/helper";
import axios from "axios";
import { useSession } from "next-auth/react";

const CreateJob = () => {
  const { id } = useParams();
  const session = useSession();
  const [logoUrl, setLogoUrl] = useState(false);
  const [bannerUrl, setBannerUrl] = useState(false);
  // handleChangeCompanyLogo
  const handleChangeCompanyLogo = (e) => {
    setLogoUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleChangeCompanyBanner = (e) => {
    setBannerUrl(URL.createObjectURL(e.target.files[0]));
  };

  // handleJobFormSubmit
  const handleJobFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobtitle.value;
    const salary = form.jobsalary.value;
    const jobType = form.jobType.value;
    const workTime = form.workTime.value;
    const logo = form.logo.files[0];
    const country = form.country.value;
    const state = form.state.value;
    const city = form.city.value;
    const banner = form.banner.files[0];
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const description = form.description.value;

    try {
      const res = await uploadImageToCloudinary(logo);
      const resBanner = await uploadImageToCloudinary(banner);

      if (res.data.url && resBanner.data.url) {
        const jobInfo = {
          companyId: id,
          jobTitle,
          salary,
          jobType,
          workTime,
          logo: res.data.url,
          country,
          state,
          city,
          banner: resBanner.data.url,
          description,
          jobContact: {
            name,
            number,
            email,
          },
          userInfo: {
            userName: session?.data?.user?.name,
            userEmail: session?.data?.user?.email,
          },
          createdDate: new Date(),
        };
        // Send data To DB
        const resData = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`,
          jobInfo
        );

        if (resData?.data?.res?.insertedId) {
          toastAlert("Job Created Successful", "success");
          e.target.reset();
          setBannerUrl(false);
          setLogoUrl(false);
        }
      }
    } catch (error) {
      toastAlert(error.message, "error");
      return [];
    }
  };

  return (
    <div>
      <Shap>
        <form
          onSubmit={handleJobFormSubmit}
          className="space-y-6 md:max-w-4xl mx-auto border border-slate-50/10 p-4 mt-4 rounded-md"
        >
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="space-y-1 text-sm flex-1">
              <label htmlFor="jobTitle" className="block text-gray-400">
                Job Title
              </label>
              <input
                type="text"
                name="jobtitle"
                id="jobTitle"
                placeholder="Job Title"
                className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-gray-400">Salary</label>

              <div className="relative">
                <input
                  type="text"
                  name="jobsalary"
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
                  />
                  &nbsp;
                  <label for="hybrid">Fully-remote</label>
                </div>
              </div>
              {/*  Full Time */}
              <div>
                <label htmlFor="remote" className="block text-gray-400">
                  Full Time?
                </label>
                <div>
                  <input type="radio" name="workTime" value="project" /> &nbsp;
                  <label for="onSite">Project</label>
                </div>
                <div>
                  <input type="radio" name="workTime" value="part-time" />
                  &nbsp;
                  <label for="hybrid">Part-Time</label>
                </div>
                <div>
                  <input type="radio" name="workTime" value="full-time" />
                  &nbsp;
                  <label for="hybrid">Full-Time</label>
                </div>
              </div>

              {/* Job Banner */}
              <div>
                <label className="block text-gray-400">Company Logo</label>
                {logoUrl ? (
                  <Image
                    src={logoUrl}
                    width={40}
                    height={40}
                    className="w-24 h-24 bg-slate-400 object-cover"
                    alt="Company Image"
                  />
                ) : (
                  <div className="w-24 h-24 bg-slate-400 flex justify-center items-center">
                    <small>Company Logo</small>
                  </div>
                )}

                <input
                  type="file"
                  id="salary"
                  name="logo"
                  onChange={handleChangeCompanyLogo}
                  className="w-3/5 mt-3 px-2 py-1 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div>
            <label htmlFor="jobTitle" className="block text-gray-400">
              Location
            </label>
            <div className="flex gap-2 flex-col md:flex-row justify-between ">
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
          <div className="">
            {/* Job Contact Person */}
            <label className="block text-gray-400">Contact Person</label>
            <div className="flex gap-2 flex-col md:flex-row md:justify-between md:items-center">
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
          </div>

          <div className="">
            <div className="space-y-1 text-sm flex flex-col md:flex-row">
              {/*  */}
              <div>
                <label className="block text-gray-400">Job Banner </label>
                {bannerUrl ? (
                  <Image
                    src={bannerUrl}
                    width={40}
                    height={40}
                    className="w-24 h-24 bg-slate-400 object-cover"
                    alt="Company Image"
                  />
                ) : (
                  <div className="w-24 h-24 bg-slate-400 flex justify-center items-center">
                    <small>Job Banner</small>
                  </div>
                )}

                <input
                  type="file"
                  id="salary"
                  onChange={handleChangeCompanyBanner}
                  name="banner"
                  className="w-3/5 mt-3 px-2 py-1 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                />
              </div>
              {/*  */}
              <div className="flex-1">
                <label className="block text-gray-400">Job Description </label>
                <textarea
                  name="description"
                  id=""
                  placeholder="Job Description"
                  className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center w-full flex justify-center items-center">
            <button
              type="submit"
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
