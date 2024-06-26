"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/login" || pathName === "/sign-up") {
    return null;
  }
  return (
    <footer className="mt-12 py-5 text-center">
      <p className="text-sm"> &copy; 2024 Dream Job All rights reserved. </p>
      <small>
        Developed by{" "}
        <Link
          href={"https://bd.linkedin.com/in/sayyidhammadsaadi"}
          target="_blank"
        >
          Hammad Sadi
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
