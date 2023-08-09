import matt from "../images/matt.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section className="p-4">
      <div className="flex flex-col md:flex-row py-4 justify-around items-center">
        <div className="flex flex-col space-y-2 md:space-y-4 max-w-lg md:pr-4">
          <h1 className="text-center font-semibold text-4xl pb-4">About Me</h1>
          <p className="pb-4 max-w-4xl font-semibold md:text-lg lg:text-xl ">
            I'm a developer who has taught myself a variety of programming
            languages. My strengths include rapid learning of fresh ideas,
            excelling in solving problems, and a background in constructing web
            applications, APIs, and databases. I'm committed to constantly
            enhancing my abilities and taking on new challenges.
          </p>
        </div>
        <div className="">
          <Image
            src={matt}
            className="w-full h-full object-cover max-w-3xl lg:max-w-lg rounded"
            alt="my_tech_stack"
            priority
          />
        </div>
      </div>
    </section>
  );
}
