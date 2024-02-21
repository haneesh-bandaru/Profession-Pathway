import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Jobs from "@/components/shared/Jobs";
import Sponsors from "@/components/shared/Sponsors";
import { prisma } from "@/lib/prisma";

const Home = async () => {
  // Fetch jobs data from the database
  const jobs = await prisma.jobPosting.findMany({});

  // Convert salary to string for each job
  const jobsWithStringSalary = jobs.map((job) => ({
    ...job,
    salary: job.salary.toString(),
  }));

  return (
    <>
      <Hero jobs={jobsWithStringSalary} />
      <Jobs />
      <Sponsors />
      <About />
      <Contact />
    </>
  );
};

export default Home;
