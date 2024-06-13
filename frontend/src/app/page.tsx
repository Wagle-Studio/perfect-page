import { Header } from "@/ui/web/components/header/Header";
import { Hero } from "@/ui/web/components/hero/Hero";
import "./page.scss";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
