import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

function Navbar() {
  return (
    <section className="">
      <div className="bg-black flex space-x-6 justify-center md:justify-start items-center lg:justify-start w-full h-16 px-6 pb-6 pt-16">
        <AiFillGithub className="h-8 w-8" />
        <AiFillLinkedin className="h-8 w-8" />
        <AiOutlineTwitter className="h-8 w-8" />
      </div>
    </section>
  );
}

export default Navbar;
