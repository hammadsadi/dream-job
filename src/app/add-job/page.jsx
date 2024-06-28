"use client";
import Shap from "@/components/Shared/Shap/Shap";
import companyLogo from "@/assets/images/company.json";
import Lottie from "lottie-react";
import AddCompany from "@/components/AddCompany/AddCompany";

const page = async () => {
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
              {/*  */}
              <AddCompany />
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
