import type { Metadata } from "next";
import { Header } from "@/ui/web/components/header/Header";

export const metadata: Metadata = {
  title: "Perfect Page",
  description: "Perfect Page",
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
