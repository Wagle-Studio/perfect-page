import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionWrapper } from "@/app/api/auth/[...nextauth]/SessionWrapper";
import { Header } from "@/ui/web/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfect Page",
  description: "Perfect Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
