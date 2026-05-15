import Hero from "./homepage/hero";
import Step from "./homepage/step";
import Profile from "./homepage/profile";
import PreFooter from "./homepage/prefooter";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#9A9A9A]">
      <Hero></Hero>
      <Step></Step>
      <Profile></Profile>
      <PreFooter></PreFooter>
    </main>
  );
}
