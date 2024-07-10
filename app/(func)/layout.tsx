import { auth } from "@/auth";
import LoginButton from "@/components/auth/LoginButton";
import LogoutButton from "@/components/auth/LogoutButton";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await auth();
  session && console.log(session);
  return (
    <div>
      {session ? <LogoutButton /> : <LoginButton />}

      {children}
    </div>
  );
}
