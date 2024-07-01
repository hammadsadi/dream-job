import { timeAgo } from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdHeart } from "react-icons/io";

const Job = ({ data }) => {
  return (
    // <div className="p-4 bg-[#09090B] rounded-md">
    //   <div className="flex gap-4">
    //     <Image
    //       src={
    //         "https://static-00.iconduck.com/assets.00/spotify-icon-2048x2048-3js5gsei.png"
    //       }
    //       width={100}
    //       height={100}
    //       alt={"title"}
    //       className="w-24 h-24 rounded-full"
    //     />
    //     <div className="flex justify-between">
    //       <div className="flex flex-col justify-between">
    //         <h5 className="text-gray-300 text-sm">Spotify</h5>
    //         <h2 className="text-xl md:text-2xl font-bold">
    //           Lorem ipsum dolor sit amet.
    //         </h2>
    //         <div className="flex flex-row gap-1 text-sm text-gray-300">
    //           <p>Remote </p> &middot;
    //           <p>California, US</p> &middot;
    //           <p>Full Time </p>
    //         </div>
    //       </div>

    //       <div className="flex md:items-end items-center">
    //         <p className="text-sm text-gray-300">2 weeks </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="p-4 bg-[#09090B] rounded-md">
      <div className="flex md:flex-row flex-col  gap-4">
        <div>
          <Image
            src={data?.logo}
            width={100}
            height={100}
            alt={"title"}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <h5 className="text-gray-300 text-sm">Spotify</h5>
          <Link
            href={`/jobs/${data._id}`}
            className="text-xl md:text-2xl font-bold hover:underline"
          >
            {data?.jobTitle}
          </Link>
          <div className="flex flex-row gap-1 text-sm text-gray-300">
            <p>{data?.jobType} </p> &middot;
            <p>
              {data?.state},{data?.country}
            </p>{" "}
            &middot;
            <p>{data?.workTime} </p>
          </div>
        </div>

        <div className="flex md:flex-col justify-between">
          <p>
            <IoMdHeart className={`text-slate-50/10 text-xl cursor-pointer `} />
          </p>
          <p className="text-sm text-gray-300">
            {" "}
            {timeAgo(data?.createdDate)}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;
