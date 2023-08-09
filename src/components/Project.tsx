import Image from "next/image";
import Projectdata from "../data/Projectdata";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInRight = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Project() {
  return (
    <section className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid gap-4 grid-col md:grid-cols-2 lg:grid-cols-3">
        {Projectdata.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-700 rounded-lg overflow-hidden"
            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            initial="initial"
            animate="animate"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex items-center">
                <Link
                  href={project.projectlink}
                  target="_blank"
                  rel="noreferrer"
                  className=" bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg  whitespace-nowrap"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
