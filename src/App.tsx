import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download, GraduationCap, Briefcase } from "lucide-react";
import portrait from "./assets/img1.webp";
import koncert from "./assets/koncert-min.webp";
import security from "./assets/security-min.webp";
import questions from "./assets/question-marks.webp";
import edytor from "./assets/edytor.webp";
import { Helmet } from "react-helmet-async";
import bg from "./assets/bg1.webp";
import bg2 from "./assets/bg2.webp";

function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return elementRef;
}

function AnimatedSection({ children, className = "" }) {
  const ref = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

function App() {
  function scrollToContact() {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Adam Komorowski - Frontend Developer & AI Enthusiast</title>
        <meta
          name="description"
          content="Portfolio of Adam Komorowski, a Computer Science student and Frontend Developer specializing in AI and modern web technologies."
        />
        <meta
          name="keywords"
          content="Adam Komorowski, Komorowski Adam, Frontend Developer, Strony internetowe, Strony www, Strony Łódź, Adam Łódź, Komorowski Łódź, Adam Komorowowski Łódź, Komorowski Adam Łódź"
        />
        <meta name="author" content="Adam Komorowski" />
        <meta property="og:title" content="Adam Komorowski - Frontend Developer" />
        <meta
          property="og:description"
          content="Explore my projects and skills in frontend development and artificial intelligence."
        />
        <meta property="og:image" content={portrait} />
        <meta property="og:url" content="https://komorowskiadam.pl" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700 text-white flex items-center animate-[fadeIn_1s_ease-out]">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 md:py-20">
              <div className="space-y-2 mb-6 animate-[slideIn_0.8s_ease-out]">
                <h2 className="text-teal-300 text-lg md:text-xl font-medium tracking-wide">Computer Science Student</h2>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Adam Komorowski</h1>
                <h2 className="text-2xl md:text-3xl text-purple-200 font-medium">Frontend Developer</h2>
              </div>
              <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed animate-[fadeIn_1s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
                Passionate Frontend Developer from Poland leveraging artificial intelligence to build innovative web
                solutions. Currently pursuing my CS degree with a focus on AI at Politechnika Łódzka.
              </p>
              <div className="flex gap-4 animate-[fadeIn_1s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
                {/* <button className="btn-hover bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl">
                  <Download size={20} /> Resume
                </button> */}
                <button
                  onClick={scrollToContact}
                  className="btn-hover bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-500 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} /> Contact Me
                </button>
              </div>
            </div>
            <div
              className="relative w-48 h-48 md:w-72 md:h-72 rounded-2xl border-4 border-purple-200/20 shadow-2xl 
                transition-transform duration-300 ease-out rotate-3 hover:rotate-0 overflow-hidden"
            >
              <img src={portrait} alt="Profile" className="w-full h-full object-cover scale-125" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-50 to-teal-50" id="timeline">
        <div
          className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-900 tracking-tight">Career Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto rounded-full"></div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-teal-500 to-purple-600 hidden md:block"></div>

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <AnimatedSection key={index}>
                <div
                  className={`relative flex flex-col md:flex-row items-center md:items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100/50 group hover:-translate-y-1 transition-transform">
                      <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "justify-end" : ""}`}>
                        <span className="text-sm font-medium text-teal-600">{item.date}</span>
                        {item.type === "education" ? (
                          <GraduationCap className="text-purple-600" size={20} />
                        ) : (
                          <Briefcase className="text-purple-600" size={20} />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-purple-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 hidden md:flex">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-purple-600 group-hover:border-teal-500 transition-colors"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 bg-gradient-to-b from-teal-50 to-purple-50" id="projects">
        <div
          className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-900 tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto rounded-full"></div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index}>
                <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-teal-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="relative p-6 z-20">
                    <h3 className="text-xl font-bold mb-2 text-purple-900 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 group-hover:text-white/90 transition-colors">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-white/10 group-hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="text-slate-600 hover:text-white flex items-center gap-1 group-hover:text-white/90 transition-colors"
                      >
                        <Github size={18} /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-50 to-teal-50" id="skills">
        <div
          className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-900 tracking-tight">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto rounded-full"></div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50">
                  <h3 className="text-xl font-bold mb-6 text-purple-900 pb-2 border-b border-purple-100">
                    {category.name}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-teal-600 font-medium">{skill.level}</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2.5 p-0.5 backdrop-blur-sm">
                          <div
                            className="skill-bar h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 transition-all duration-500 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 bg-gradient-to-b from-teal-50 to-white" id="contact">
        <div
          className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        />
        <div className="container mx-auto px-6 max-w-5xl relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-purple-900 tracking-tight">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto rounded-full"></div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex justify-center gap-8 md:gap-16">
              <a href="mailto:komorowski.adam2000@gmail.com" className="group">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Mail className="text-white w-8 h-8" />
                  </div>
                  <span className="font-medium text-purple-900">Email</span>
                </div>
              </a>
              <a href="https://github.com/komorowskiadam" className="group">
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Github className="text-white w-8 h-8" />
                  </div>
                  <span className="font-medium text-purple-900">GitHub</span>
                </div>
              </a>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fadam-komorowski-810776260%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3l88Yi50RRPEzimaq2MZCQBoy1F0Kp8urEgJQUu-QPYW-8tARPaWuULx0_aem_XlKfYENrflGv0juYIWe9Ug&h=AT3HcYg7BAF2szukf7qeMdGtS74bzm-Nq_KZwMJ4gBQ3OoXYkiJqdJUqqDwbXt8YXz2kM4_6bzJ4O4GSyCEF7MFom4iASy_dwRwbnNjyJclhxS4VTj64g4pBT3PCbw"
                className="group"
              >
                <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-teal-500 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Linkedin className="text-white w-8 h-8" />
                  </div>
                  <span className="font-medium text-purple-900">LinkedIn</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

const timeline = [
  {
    date: "October 2023",
    type: "education",
    title: "Master's in Computer Science (AI)",
    description: "Started Master's degree with AI specialization at Politechnika Łódzka",
  },
  {
    date: "March 2023",
    type: "education",
    title: "Bachelor's in Computer Science",
    description: "Graduated with Bachelor's degree from Politechnika Łódzka",
  },
  {
    date: "August 2022",
    type: "professional",
    title: "Frontend Developer",
    description: "Transitioned to Frontend Developer role at Comarch",
  },
  {
    date: "October 2021",
    type: "professional",
    title: "Backend Developer",
    description: "Joined Comarch as Backend Developer",
  },
  {
    date: "July 2021",
    type: "professional",
    title: "Software Development Intern",
    description: "Internship at Comarch",
  },
  {
    date: "October 2019",
    type: "education",
    title: "Bachelor's in Computer Science",
    description: "Started Bachelor's degree at Politechnika Łódzka",
  },
];

const projects = [
  {
    title: "System to manage mass events",
    description:
      "System to manage mass events, such as concerts, conferences, etc. Includes dashboard for event organizers and mobile app for users.",
    image: koncert,
    technologies: ["SpringBoot", "Angular", "Flutter", "PostgreSQL"],
    github: "httphttps://github.com/komorowskiadam/inzynierka",
    demo: "#",
  },
  {
    title: "CyberSenior app",
    description:
      "Mobile application to help seniors learn how to be safe online. Includes quizzes, tutorials and useful tools like AI content detector or link checker",
    image: security,
    technologies: ["Flutter", "Dart", "FastAPI"],
    github: "https://github.com/komorowskiadam/cybersecurity-app",
    demo: "#",
  },
  {
    title: "MMORPG game",
    description:
      "Browser based MMORPG game with real-time combat, quests, crafting etc. No engine/ready solutions. Not yet publically available.",
    image: questions,
    technologies: ["Vue.js", "Express", "Socket.io", "Pixi.js"],
    github: "https://youtu.be/vXYVfk7agqU?si=XwzZjVy5UMavFp9D",
    demo: "#",
  },
  {
    title: "Editor for the MMORPG game",
    description:
      "Web-based editor for the MMORPG game. Allows to create new quests, dialogues, enemies etc. Not yet publically available.",
    image: edytor,
    technologies: ["Angular", "MongoDB", "Express", "rete.js"],
    github: "https://youtu.be/vXYVfk7agqU?si=XwzZjVy5UMavFp9D",
    demo: "#",
  },
];

const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Typescript", level: "Advanced", percentage: 90 },
      { name: "Python", level: "Intermediate", percentage: 75 },
      { name: "Java", level: "Intermediate", percentage: 65 },
      { name: "C", level: "Basic", percentage: 60 },
    ],
  },
  {
    name: "AI & ML Frameworks",
    skills: [
      { name: "TensorFlow", level: "Advanced", percentage: 85 },
      { name: "PyTorch", level: "Advanced", percentage: 85 },
      { name: "Scikit-learn", level: "Intermediate", percentage: 80 },
      { name: "OpenCV", level: "Intermediate", percentage: 75 },
    ],
  },
  {
    name: "Development Tools",
    skills: [
      { name: "Git", level: "Advanced", percentage: 90 },
      { name: "Linux", level: "Intermediate", percentage: 80 },
      { name: "Docker", level: "Intermediate", percentage: 70 },
      { name: "AWS", level: "Basic", percentage: 50 },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "Vue.js", level: "Intermediate", percentage: 75 },
      { name: "Node.js", level: "Advanced", percentage: 90 },
      { name: "Angular", level: "Advanced", percentage: 85 },
      { name: "SpringBoot", level: "Intermediate", percentage: 70 },
    ],
  },
];

export default App;
