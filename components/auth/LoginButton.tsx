import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function LoginButton() {
  return (
    <div className="absolute right-0 m-2">
      <Button className="bg-shade1 hover:bg-shade2">
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}

export default LoginButton;
