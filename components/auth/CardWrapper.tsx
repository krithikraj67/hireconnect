"use client";

import { Card, CardContent, CardHeader } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  showSocial?: boolean;
}

export const CardWrapper = ({ children, headerLabel }: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md ">
      <CardHeader className="text-shade2 font-bold flex text-center text-lg">
        {headerLabel}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
