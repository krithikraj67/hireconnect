"use client";

import Image from "next/image";
import logo from "../images/logo.jpg";
import Link from "next/link";
import Icon from "./Icon";
import { Button } from "../ui/button";

function Header() {
  return (
    <header>
      <div className="flex bg-shade3 align-middle items-center h-[70px] p-3">
        <Link href="/">
          <Image
            className="hidden md:block"
            src={logo}
            alt="logo"
            height={60}
          />
          <h1 className="block text-shade4 md:hidden">HireConnect</h1>
        </Link>
        <div className="w-[50%]"></div>
        <div className="flex flex-1 flex-row">
          <Icon name="Freelancers" href="/freelancers" />
          <Icon name="Bounties" href="/bounties" />
          <Icon name="About Us" href="/aboutus" />
          <Icon name="Profile" href="/Profile" />
        </div>
        <Button className="bg-shade1 hover:bg-shade2">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}

export default Header;
