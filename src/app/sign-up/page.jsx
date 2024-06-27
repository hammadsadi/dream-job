"use client";
import { toastAlert } from "@/helper/helper";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

const Signup = () => {
  const [prevImage, setPrevImage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Change Image
  const handleChangeImage = (e) => {
    setPrevImage(URL.createObjectURL(e.target.files[0]));
  };

  // Handle Submit User SignUp
  const handleSubmitUserSignUp = async (e) => {
    e.preventDefault();

    // Get Form Filed Value
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];

    // Form Filed Validation
    if (!name || !email || !password || e.target.photo.files.length === 0) {
      return toastAlert("All Fields Are Required", "error");
    }

    // Upload Image to Cloudinary
    setLoading(true);
    const formData = new FormData();
    formData.append("file", photo);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    );

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dq1ey5jg1/image/upload",
        formData
      );
      // console.log(res.data.url);
      if (res.data.url) {
        // User Info
        const userInfo = {
          name,
          email,
          password,
          photo: res.data.url,
        };
        try {
          // Send Data To Server
          const resData = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`,
            userInfo
          );
          if (resData.data.status === 400) {
            setLoading(false);
            toastAlert(resData.data.message, "error");
          } else {
            setLoading(false);
            e.target.reset();
            setPrevImage(false);
            toastAlert(resData.data.message, "success");
          }
        } catch (error) {
          setLoading(false);
          return [];
        }
      }
    } catch (error) {
      toastAlert(error.message, "error");
      return [];
    }
  };
  return (
    <div className="w-full h-full py-5 flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#09090b] border border-slate-50/10 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <form
          noValidate=""
          onSubmit={handleSubmitUserSignUp}
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
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-slate-50/5 bg-[#09090b] text-gray-100 focus:border-slate-50/10 focus:outline-none"
            />
          </div>
          <div className="space-y-1 text-sm">
            <fieldset className="w-full space-y-1 text-gray-100">
              <label htmlFor="photo" className="block text-sm font-medium">
                Profile Image
              </label>
              <div className="flex justify-center items-center gap-4 px-4 w-full py-6 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-800">
                {prevImage && (
                  <Image
                    src={prevImage}
                    height={50}
                    width={50}
                    alt="User Photo"
                    className="w-10 h-10 object-cover rounded-md"
                  />
                )}

                <input
                  type="file"
                  onChange={handleChangeImage}
                  name="photo"
                  id="files"
                  className=""
                />
              </div>
            </fieldset>
          </div>
          <button
            className={`w-full p-3 text-center rounded-sm text-white hover:bg-slate-50/10 border border-slate-50/10 flex justify-center items-center gap-1 ${
              loading && "cursor-not-allowed bg-slate-50/10"
            }`}
            disabled={loading}
          >
            {loading && <LuLoader2 className="animate-spin" />}{" "}
            <span>Sign Up</span>
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-gray-400">
          Already have an account? &nbsp;
          <Link href="/login" className="underline text-gray-100">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
