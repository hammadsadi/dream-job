import React from "react";
import Shap from "../Shared/Shap/Shap";
import Job from "../Shared/Job/Job";

const Jobs = () => {
  return (
    <section>
      <Shap>
        <div className="bg-[#18181B] p-3 md:p-6 rounded-md">
          <h4 className="text-xl">Resent Jobs</h4>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </Shap>
    </section>
  );
};

export default Jobs;
