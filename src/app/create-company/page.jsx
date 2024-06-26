"use client";

import { toastAlert } from "@/helper/helper";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreateCompany = () => {
  const session = useSession();

  const router = useRouter();
  // handleCreateCompany
  const handleCreateCompany = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const companyInfo = {
      name: name,
      ownerName: session?.data?.user?.name,
      ownerEmail: session?.data?.user?.email,
    };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/company`,
      companyInfo
    );
    if (data.res.insertedId) {
      toastAlert("Company Created Successful", "success");
      e.target.reset();
      router.push("/add-job");
    }
  };
  return (
    <div className="w-full h-[calc(100vh-214px)] flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#09090b] border border-slate-50/10 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Create New Company</h1>
        <form
          noValidate=""
          onSubmit={handleCreateCompany}
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className={`w-full p-3 text-center rounded-sm text-white hover:bg-slate-50/10 border border-slate-50/10 flex justify-center items-center gap-1`}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
