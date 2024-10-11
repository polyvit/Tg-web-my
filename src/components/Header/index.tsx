import React, { ReactNode } from "react";
import Logo from "@/assets/icon-github.svg";
import Link from "next/link";
import { ROUTES } from "@/routes";

const styles = {
  gradient: {
    background:
      "linear-gradient(270deg, rgb(255, 133, 171) 36%, rgb(250, 82, 82) 71%)",
    "background-clip": "text",
  },
};

const Header = ({
  children,
  logoLink = ROUTES.HOME,
}: {
  children?: ReactNode;
  logoLink?: string;
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center px-5 py-7 mb-10 border-b-[5px] border-solid border-custom-red">
      <Link href={logoLink} className="flex items-center gap-2">
        <img src={Logo.src} alt="logo" />
        <h1
          style={styles.gradient}
          className="text-2xl bg-clip-text text-transparent"
        >
          Polina Shop
        </h1>
      </Link>
      {children}
    </div>
  );
};

export default Header;
