"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { logout } from "@/actions/auth";

function LogoutButton() {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="absolute right-0 m-2">
      <Button onClick={handleLogout} className="bg-shade1 hover:bg-shade2">
        Logout
      </Button>
    </div>
  );
}

export default LogoutButton;
