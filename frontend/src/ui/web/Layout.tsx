import { Inter } from "next/font/google";
import { Header } from "@/ui/web/components/header/Header";
import "./globals.scss";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`${inter.className} web__layout`}>
      <Header />
      <main>{children}</main>
    </body>
  );
}
