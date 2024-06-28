"use client";
import Link from "next/link";
import Btn from "../Shared/Btn/Btn";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const session = useSession();
  const [userMenu, setUserMenu] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathName = usePathname();
  if (pathName === "/login" || pathName === "/sign-up") {
    return null;
  }

  return (
    <div className="py-4 shadow-xl ">
      <nav className="container px-4 md:px-0 mx-auto flex justify-between items-center relative ">
        <Link href="/" className="text-xl md:text-3xl font-bold">
          Dream Job
        </Link>
        <ul
          className={`md:flex items-center gap-4 absolute md:static right-2 border md:border-none border-slate-50/10 bg-[#09090B] z-50 ${
            isOpenMenu ? " top-14" : "-top-[300px]"
          }`}
        >
          <li>
            {" "}
            <Link
              className="py-1 px-4 hover:bg-slate-50/10 md:rounded-md block text-center"
              href={"/"}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              className="py-1 px-4 hover:bg-slate-50/10 md:rounded-md block text-center"
              href={"/my-jobs"}
            >
              My Jobs
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link
              className="py-1 px-4 hover:bg-slate-50/10 md:rounded-md block text-center"
              href={"/my-jobs"}
            >
              My Jobs
            </Link>{" "}
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {session?.data?.user && (
            <Link href={"/add-job"}>
              <Btn btnLabel={"Post New Job"} />
            </Link>
          )}

          {session?.data?.user?.photo ? (
            <div className="relative">
              <div className="inline-flex items-center overflow-hidden rounded-full p-1 border border-slate-50/10 ">
                <button onClick={() => setUserMenu(!userMenu)}>
                  <Image
                    src={session?.data?.user?.photo}
                    width={30}
                    height={30}
                    className="w-9 h-9 rounded-full"
                    alt={session?.data?.user?.name}
                  />
                </button>
              </div>
              {/* Toggle Menu */}
              <div
                className={`absolute end-0 z-10 mt-2 w-56 divide-y divide-slate-50/10 rounded-md border border-slate-50/10 bg-[#09090B] shadow-lg ${
                  userMenu ? "block" : "hidden"
                }`}
                role="menu"
              >
                <div className="p-2">
                  <Link
                    href="/my-jobs"
                    className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-slate-50/10 "
                    role="menuitem"
                  >
                    My Jobs
                  </Link>
                  <Link
                    href="/add-jobs"
                    className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-slate-50/10 "
                    role="menuitem"
                  >
                    Add New Jobs
                  </Link>
                </div>

                <div className="p-2">
                  <button
                    type="submit"
                    onClick={() => signOut()}
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-slate-50/10"
                    role="menuitem"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link href={"/login"}>
              <Btn btnLabel={"Login"} />
            </Link>
          )}

          <button
            className="md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            {" "}
            {isOpenMenu ? <IoMdClose size={25} /> : <CiMenuFries size={25} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
