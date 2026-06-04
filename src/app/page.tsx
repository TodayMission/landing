import Hero from "./homepage/hero";
import Step from "./homepage/step";
import Profile from "./homepage/profile";
import PreFooter from "./homepage/prefooter";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#9A9A9A]">
      <Hero></Hero>
      <Step></Step>
      <Profile></Profile>
      <FAQ></FAQ>
      <PreFooter></PreFooter>
    </main>
  );
}
