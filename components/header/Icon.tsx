"use client";

import Link from "next/link";

interface IconProps {
  icon?: string;
  name: string;
  href: string;
}

function Icon({ name, href }: IconProps) {
  return (
    <div className="flex m-5 items-center font-bold text-sm lg:text-lg text-shade1 hover:text-shade4">
      <Link href={href}>
        <h4>{name}</h4>
      </Link>
    </div>
  );
}

export default Icon;
