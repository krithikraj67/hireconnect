import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

async function freelancersPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return <div>Freelancers</div>;
}

export default freelancersPage;
