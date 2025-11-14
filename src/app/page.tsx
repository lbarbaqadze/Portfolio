'use client'

import { useEffect } from "react";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import LightRays from "./components/Background/LightRays";
import Navbar from "./components/Navbar/Navbar";
import AutoSplitText from "./components/AutoSplitText";
import Lottie from "lottie-react";
import animationData from "@/animations/animation.json";
import Contact from "./components/Contact/Contact";
import LogoLoop from "./components/Scroll/LogoLoop";
import {
  SiReact, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss3, SiJavascript, SiMysql, SiMongodb, SiBootstrap, SiNodedotjs, SiPython
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si"

import styles from "./page.module.css";

export default function Home() {

  const path = process.env.NODE_ENV === 'production' ? '/Portfolio' : ''

  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 0
    });
  }, []);

  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiHtml5 />, title: "HTML" },
    { node: <SiCss3 />, title: "CSS" },
    { node: <SiJavascript />, title: "Javascript" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiPython />, title: "Python" },
  ];

  const skills = ["HTML/CSS", "React", "Typescript", "NextJs"];

  return (

    <>
    <LightRays
      particleColors={['#ffffffff', '#ffffffff']}
      particleCount={900}
      particleSpread={12}
      speed={0.1}
      particleBaseSize={110}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
    
      <Navbar />

      <main className={styles.containerOne}>
        <section className={styles.componentOne}>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" data-aos-easing="ease-in-out">
            <AutoSplitText className="text-2xl font-semibold">
              <h1 className={styles.h1}>
                Hello, I'm Lasha <br />
                Front-End Web <br />
                <span>Developer!</span>
              </h1>
              <p className={styles.p1}>Caucasus International University Student</p>
              <p className={styles.p2}>
                Innovative, functional and user-friendly website digital solutions.
              </p>
            </AutoSplitText>
          </div>

          <div className={styles.buttonList}>
            {skills.map((skill, index) => (
              <button
                key={skill}
                className={styles.btn}
                data-aos="fade-up"
                data-aos-delay={50 * index}
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                {skill}
              </button>
            ))}
          </div>


          <a
            href="mailto:barbaqadzelasha45@gmail.com"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className={styles.contact}
          >
            Contact <FontAwesomeIcon icon={faEnvelope} />
          </a>


          <div className={styles.social}>
            <a
              href="https://github.com/lbarbaqadze?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
              data-aos-delay={50 * 0}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/lasha-barbaqadze-b7319a2b3/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
              data-aos-delay={50 * 1}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://www.instagram.com/lashabarbaqadzee/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-right"
              data-aos-delay={50 * 2}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className={styles.link}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </section>


        <section className={styles.componentTwo}>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-[300px] h-[300px] mx-auto"
            />
          </div>
        </section>
      </main>

      <div className={styles.containerTwo} id="about">
        <h3 className={styles.subtitle} data-aos="fade-down" data-aos-duration="1000">
          About Me
        </h3>
        <p className={styles.tagline} data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
          Transforming ideas into digital experiences
        </p>
        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1200">
          Hello, I'm <br /> Lasha Barbakadze
        </h1>
        <p className={styles.description} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">
          I create modern, responsive, and user-friendly web applications that help businesses
          and individuals achieve their digital goals. Passionate about both frontend and backend technologies,
          I specialize in building scalable solutions using HTML, CSS, JavaScript, React, Node.js, Express.js, MangoDB,
          MySQL.
          I enjoy turning complex problems into simple, elegant digital experiences.
        </p>
        <a
          href={`${path}/cv/forportfolioCV.pdf`}
          download="Lasha_Barbakadze_CV.pdf"
          className={styles.cvButton}
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Download CV
        </a>
      </div>

      <div
        className={styles.containerThree}
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
      >
        <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
          Tech Stack <FontAwesomeIcon icon={faGears} style={{fontSize: "28px"}} />
        </h1>
        <div className={`logoloop-wrapper`}>
          <LogoLoop
            logos={techLogos.map(logo => ({
              ...logo,
              node: React.cloneElement(logo.node, { color: "#fff" })
            }))}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut            
            ariaLabel="Technology partners"
          />
        </div>
      </div>

      <div className={styles.containerFour} id="projects">
        <h2 className={styles.sectionTitle} data-aos="fade-down" data-aos-duration="1000">
          My Projects <FontAwesomeIcon icon={faDiagramProject} style={{fontSize: "28px"}} />
        </h2>

        <div className={styles.projectsGrid}>
          {[
            {
              title: "Georgian Wine - Website",
              description: "Responsive website showcasing authentic Georgian wines with rich traditions. Browse our wine catalog and learn about each variety.",
              image: `${path}/images/images9.png`,
              link: "https://lbarbaqadze.github.io/GeorgianWine/"
            },
            {
              title: "BMW - Magazine",
              description: "A modern web app featuring user login/registration stored in localStorage, interactive car catalog, and shopping cart functionality.",
              image: `${path}/images/images8.png`,
              link: "https://lbarbaqadze.github.io/bmwstore/"
            },
            {
              title: "Georgia Tours Website",
              description: "Responsive travel website showcasing Georgia destinations using React.",
              image: `${path}/images/images1.png`,
              link: "https://lbarbaqadze.github.io/Georgian/"
            },
            {
              title: "Apple Inspiration",
              description: "Interactive Apple-themed website where users can browse products, add items to the cart, and explore features in a smooth UI.",
              image: `${path}/images/images2.png`,
              link: "https://lbarbaqadze.github.io/store/"
            },
            {
              title: "GYM Website",
              description: "Informational CrossFit website where users can learn about the gym, check class schedules, and explore available programs.",
              image: `${path}/images/images3.png`,
              link: "https://gymwebsite-204.vercel.app"
            },
            {
              title: "React MiniTools",
              description: "Collection of small React tools and utilities for faster development and demos.",
              image: `${path}/images/images4.png`,
              link: "https://lbarbaqadze.github.io/MiniTools/"
            },
            {
              title: "Netflix Clone",
              description: "React-based clone of Netflix UI, including responsive layout.",
              image: `${path}/images/images6.png`,
              link: "https://lbarbaqadze.github.io/NetflixClone/"
            },
            {
              title: "Instagram Clone",
              description: "Full-featured Instagram clone using React, with user authentication and local storage",
              image: `${path}/images/images7.png`,
              link: "https://lbarbaqadze.github.io/InstagramClone/reglogin.html"
            }
          ].map((project, idx) => (
            <div
              key={idx}
              className={styles.projectCard}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectButton}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      <Contact />
</>
  );
}
