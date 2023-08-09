import Head from "next/head";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import About from "../components/About";
import Project from "../components/Project";
import { motion } from "framer-motion";
import { useRef } from "react";
import { RefObject, useEffect, useState } from "react";

function useInView(ref: RefObject<HTMLElement>, threshold = 0.1) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return inView;
}

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

export default function Home() {
  const landRef = useRef<HTMLDivElement | null>(null);
  const landInView = useInView(landRef);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const aboutInView = useInView(aboutRef);

  const projectRef = useRef<HTMLDivElement | null>(null);
  const projectInView = useInView(projectRef);

  const contactRef = useRef<HTMLDivElement | null>(null);
  const contactInView = useInView(contactRef);
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <Head>
        <title>Matthew Parks</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <motion.div
          ref={landRef}
          variants={fadeInRight}
          initial={landInView ? "animate" : "initial"}
          animate={landInView ? "animate" : "initial"}
        >
          <Landing />
        </motion.div>
        <motion.div
          ref={aboutRef}
          variants={fadeInLeft}
          initial={aboutInView ? "animate" : "initial"}
          animate={aboutInView ? "animate" : "initial"}
        >
          <About />
        </motion.div>
        <motion.div
          ref={projectRef}
          variants={fadeInRight}
          initial={projectInView ? "animate" : "initial"}
          animate={projectInView ? "animate" : "initial"}
        >
          <Project />
        </motion.div>
        <motion.div
          ref={contactRef}
          variants={fadeInLeft}
          initial={contactInView ? "animate" : "initial"}
          animate={contactInView ? "animate" : "initial"}
        ></motion.div>
      </main>
    </div>
  );
}
