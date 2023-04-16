import me from "../images/me.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section className="p-4">
      <h1 className="text-center font-semibold text-4xl py-4">About Me</h1>
      <div className="flex flex-col md:flex-row py-4 justify-around items-center">
        <div className="flex flex-col space-y-2 md:space-y-4 max-w-lg md:pr-4">
          <p className="pb-4 max-w-4xl font-semibold md:text-lg lg:text-xl ">
            As a self-taught developer proficient in multiple languages, I excel
            in problem-solving, quickly grasp new concepts, and have experience
            building web applications, APIs, and databases. I am dedicated to
            continuous skill improvement and embracing new challenges.
          </p>
        </div>
        <div className="">
          <Image
            src={me}
            className="w-full h-full object-cover max-w-3xl lg:max-w-lg rounded"
            alt="my_tech_stack"
            priority
          />
        </div>
      </div>
    </section>
  );
}
