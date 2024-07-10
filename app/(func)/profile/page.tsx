import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

async function Profile() {
  const session = await auth();
  if (!session) redirect("/login");
  return <div>Profile</div>;
}

export default Profile;
