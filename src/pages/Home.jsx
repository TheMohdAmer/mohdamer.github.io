import { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Projects from "../components/Projects";
import ProjectModal from "../components/ProjectModal";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import SectionCard from "../components/SectionCard";
import Contact from "../components/Contact";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [highlight, setHighlight] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    setHighlight(project.title);

    document.getElementById("Projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
    
      <Navbar />
      <Hero />
      <Intro />

      <div className="pt-12">
        <Section id="Skills" className="py-16 md:py-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <SectionCard
                title="Frontend Development"
                skills={[
                  "React",
                  "Java Script",
                  "Redux Toolkit",
                  "TanStack Query",
                ]}
              >
                I build responsive UI using React, Redux Toolkit, and Ant
                Design, focusing on performance and scalability.
              </SectionCard>

              <SectionCard
                title="Backend Development"
                skills={[
                  "Java",
                  "Spring",
                  "SpringBoot",
                  "Hibernate",
                  "Spring JDBC",
                  "Micro Services",
                ]}
              >
                I develop backend systems using Java, Spring Boot, and
                microservices architecture for scalable applications.
              </SectionCard>

              <SectionCard
                title="Database & Data Management"
                skills={["MySQL", "MongoDB"]}
              >
                Experience with MySQL and MongoDB for structured and flexible
                data handling.
              </SectionCard>

              <SectionCard
                title="APIs & Integrations"
                skills={["REST APIs [ Spring Boot ]", "Node js", "API Design"]}
              >
                Building REST APIs using Spring Boot and Node.js for seamless
                system communication.
              </SectionCard>

              <SectionCard
                title="Automation & Workflow"
                skills={["Maven", "Micro Services"]}
              >
                Using Maven and microservices architecture to create
                maintainable systems.
              </SectionCard>

              <SectionCard
                title="DevOps & Deployment"
                skills={["Git", "GitHub", "Version Control"]}
              >
                Managing code with Git and GitHub, ensuring smooth collaboration
                and deployment.
              </SectionCard>

              <SectionCard
                title="Performance Optimization"
                skills={[
                  "State Optimization [ Redux Toolkit ]",
                  "API Optimization",
                  "Caching [ TanStack Query ]",
                ]}
              >
                Improving app performance with efficient state management and
                API optimization.
              </SectionCard>

              <SectionCard
                title="UI/UX Design"
                skills={[
                  "HTML5",
                  "CSS3",
                  "Ant Design",
                  "Tailwind CSS",
                  "UI Systems",
                ]}
              >
                Creating clean, responsive, and user-friendly interfaces with
                modern design systems.
              </SectionCard>

              <SectionCard
                title="Tools & Productivity"
                skills={["Git", "GitHub", "Maven"]}
              >
                Using GitHub and Maven to streamline development workflows and
                maintain structure.
              </SectionCard>

              <SectionCard title="Developer Overview">
                Full-stack developer specializing in React, Java and Spring
                Boot, building scalable, high-performance web applications with
                a focus on clean architecture and real-world problem solving.
              </SectionCard>
            </div>
          </div>
        </Section>
      </div>

      {/* PROJECTS */}
      <Projects />
      <Contact />
    </>
  );
}
