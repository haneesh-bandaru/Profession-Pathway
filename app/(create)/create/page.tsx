import CreateFrom from "../components/CreateFrom";

function page() {
  return (
    <div className=" max-w-[1450px] w-[90%] mx-auto">
      <div className="w-full mt-5 text-center">
        <h1 className="md:text-6xl text-4xl font-extrabold uppercase mb-1">
          Post a <span className="text-purple-600">job</span>
        </h1>
        <span className="w-full text-center">
          Currently 100000 users are actually looking for a Job
        </span>
      </div>
      <CreateFrom />
    </div>
  );
}

export default page;
