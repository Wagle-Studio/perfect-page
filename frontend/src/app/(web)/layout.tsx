import type { Metadata } from "next";
import { Layout } from "@/ui/web/Layout";

export const metadata: Metadata = {
  title: "Perfect Page",
  description: "Perfect Page",
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
