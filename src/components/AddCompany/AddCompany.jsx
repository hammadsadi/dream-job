"use client";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Btn from "@/components/Shared/Btn/Btn";
import { getAllCompanies } from "../ApiCall/ApiCall";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

const AddCompany = () => {
  const session = useSession();
  const [companyList, setCompanyList] = useState([]);

  const getAllCompanies = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company/${session?.data?.user?.email}`
    );
    setCompanyList(data.res);
  };

  useEffect(() => {
    getAllCompanies();
  }, [session?.data]);

  return (
    <div className="flex flex-col text-left gap-3">
      {companyList.length === 0 ? (
        <p className="text-rose-600"> No Company Found</p>
      ) : (
        companyList?.map((item) => (
          <Link
            key={item._id}
            href={`/add-job/${item._id}`}
            className=" rounded-md w-fit transition-all duration-300 bg-slate-50/10 py-2 px-3 md:py-3 md:px-6 text-sm md:text-base font-bold flex items-center justify-center gap-1"
          >
            <span>{item.name}</span> <FiArrowUpRight size={20} />
          </Link>
        ))
      )}
      {/* {com?.map((item) => (
        <Link
          key={item._id}
          href={`/add-job/${item._id}`}
          className=" rounded-md w-fit transition-all duration-300 bg-slate-50/10 py-2 px-3 md:py-3 md:px-6 text-sm md:text-base font-bold flex items-center justify-center gap-1"
        >
          <span>{item.name}</span> <FiArrowUpRight size={20} />
        </Link>
      ))} */}

      <Link href={"/create-company"}>
        <button className="border rounded-md border-gray-400/50 transition-all duration-300 hover:bg-slate-50/10 py-2 px-3 md:py-3 md:px-6 text-sm md:text-base font-bold flex items-center justify-center gap-1 mt-4">
          <span>Create New Company </span> <FaLongArrowAltRight />
        </button>
      </Link>
    </div>
  );
};

export default AddCompany;
