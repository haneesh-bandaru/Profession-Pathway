import { jobType } from "@/types/jobTypes";
import SearchForm from "./SearchForm";

interface HeroProps {
  jobs: jobType[];
}

const Hero = ({ jobs }: HeroProps) => {
  return (
    <div
      id="home"
      className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]"
    >
      <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto  max-w-[1450px]:">
        <div className="text-center flex flex-col text-black gap-3">
          <h1 className="text-6xl font-extrabold ">
            Land the{" "}
            <span className="text-purple-600 font-extrabold">Dream Job</span>
            ,You Deserve
          </h1>
          <span className="font-thin">
            100,000 jobs listed here! Your dreams job is waiting for you!
          </span>
        </div>
        <SearchForm jobs={jobs} />
      </div>
    </div>
  );
};

export default Hero;
