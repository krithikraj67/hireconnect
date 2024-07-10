import { auth } from "@/auth";
import { LoginForm } from "@/components/auth/LoginForm";
import { redirect } from "next/navigation";
import React from "react";

async function Login() {
  const session = await auth();
  if (session) redirect("/freelancers");

  return <LoginForm />;
}

export default Login;
