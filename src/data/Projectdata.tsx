import portfolio from "../images/portfolio.png";
import notelist from "../images/notelist.png";
import securekey from "../images/securekey.png";

const Projectdata = [
  {
    picture: portfolio,
    title: "My Portfolio",
    description:
      "I created this portfolio to showcase my skills and projects that I have worked on. It is created using Nextjs and Tailwindcss and is hosted on Vercel.",
    projectlink: "https://www.brianmulinge.com",
    githublink: "https://github.com/Brianmulinge/portfolio",
  },
  {
    picture: notelist,
    title: "Notelist",
    description:
      "Notelist is a simple note taking app that allows you to create, edit and delete notes. It is created using Nextjs, Taiwindcss, Trpc, Prisma and Railway for the MySQL database. Users can sign in using their Google account and have access to the notes they created. The app is hosted on Railway and Vercel.",
    projectlink: "https://notelist.vercel.app",
    githublink: "https://github.com/Brianmulinge/notelist",
  },
  {
    picture: securekey,
    title: "Securekey",
    description:
      "Securekey is a web application that creates password according to the way the user wants it. It us created using Nextjs and Tailwindcss. The app is hosted on Vercel.",
    projectlink: "https://securekey.vercel.app",
    githublink: "https://github.com/Brianmulinge/securekey",
  },
];
export default Projectdata;
