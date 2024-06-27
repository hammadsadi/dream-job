"use client";
import Shap from "@/components/Shared/Shap/Shap";
import companyLogo from "@/assets/images/company.json";
import Lottie from "lottie-react";
import Btn from "@/components/Shared/Btn/Btn";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const page = () => {
  return (
    <section>
      <Shap>
        <div className=" p-3 md:p-6 rounded-md">
          <section className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 md:mb-6">
                <h4 className="text-xl font-bold">Your Companies</h4>
                <p>Select a Company For Create Job</p>
              </div>
              <div className="flex flex-col text-left gap-3">
                <Link
                  href={"/add-job/2323424"}
                  className=" rounded-md w-fit transition-all duration-300 bg-slate-50/10 py-2 px-3 md:py-3 md:px-6 text-sm md:text-base font-bold flex items-center justify-center gap-1"
                >
                  <span>Lorem ipsum dolor sit.</span>{" "}
                  <FiArrowUpRight size={20} />
                </Link>
                <Link href={"/create-company"}>
                  <button className="border rounded-md border-gray-400/50 transition-all duration-300 hover:bg-slate-50/10 py-2 px-3 md:py-3 md:px-6 text-sm md:text-base font-bold flex items-center justify-center gap-1 mt-4">
                    <span>Create New Company </span> <FaLongArrowAltRight />
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <Lottie animationData={companyLogo} />
            </div>
          </section>
        </div>
      </Shap>
    </section>
  );
};

export default page;
