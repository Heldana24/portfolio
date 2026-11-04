import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";

const projectsData = [
  {
    id: "peerconnect",
    title: "PeerConnect: Track-Based Study Platform",
    subtitle: "Virtual Campus Tables for Distance Learners",
    tags: ["React", "JavaScript", "WebRTC", "CSS3", "HTML5"],
    summary:
      "A mobile-responsive collaborative study platform designed to bridge connection gaps for distance learning students through track-based virtual rooms.",
    description:
      "PeerConnect was engineered as a capstone solution to provide distance learners with structured, track-based study tables. Utilizing WebRTC streaming concepts, modern CSS flexbox layouts, and modular React architecture, PeerConnect enables real-time collaboration, task coordination, and peer-to-peer engagement.",
    keyFeatures: [
      "Track-specific virtual study rooms for focused peer collaboration",
      "Mobile-responsive grid and flexbox layout optimized across screens",
      "WebRTC streaming architecture for live video and voice interaction",
      "Interactive room creation and stateful student participation tracking",
    ],
    liveUrl: "https://heldana24.github.io/PeerConnect",
    githubUrl: "https://github.com/Heldana24",
  },
  {
    id: "data-mining",
    title: "Educational Data Mining & Analytics",
    subtitle: "Multi-Variable Performance Analysis Workflow",
    tags: ["Python", "Pandas", "Data Science", "NumPy"],
    summary:
      "An analytical data project processing structured academic performance metrics to derive statistical insights.",
    description:
      "Leveraging Python and Pandas multi-indexing techniques, this project processes regional and institutional educational datasets. It performs data cleaning, aggregation, grouping, and statistical rounding to highlight regional distribution trends and student growth benchmarks.",
    keyFeatures: [
      "Advanced Pandas multi-indexing and dataset grouping operations",
      "Statistical metrics computation and data normalization pipelines",
      "Automated data cleaning routines handling missing values",
    ],
    githubUrl: "https://github.com/Heldana24",
  },
  {
    id: "matrix-operations",
    title: "Multidimensional Matrix & Array Engine",
    subtitle: "High-Performance Numerical Computations",
    tags: ["Python", "NumPy", "Algorithms", "Data Operations"],
    summary:
      "Algorithmic data operations built for multi-dimensional ndarray manipulations and algorithmic efficiency.",
    description:
      "Developed during intensive computational data training, this module executes multi-dimensional array operations, matrix transformations, and optimized vector routines without relying on slow nested loops.",
    keyFeatures: [
      "Optimized vectorization routines using NumPy array mechanics",
      "Multi-dimensional slicing, reshaping, and matrix arithmetic",
      "Algorithmic execution optimized for large numeric datasets",
    ],
    githubUrl: "https://github.com/Heldana24",
  },
];

function HomeIcon() {
  return (
    <svg
      className="w-5 h-5 inline-block mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="w-5 h-5 inline-block mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="w-5 h-5 inline-block mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-5 h-5 inline-block mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function NavigationBar({ darkMode, setDarkMode }) {
  const activeClass =
    "text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-500 pb-1";
  const inactiveClass =
    "text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors pb-1";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1"
        >
          <span className="text-indigo-600 dark:text-indigo-400">Heldana</span>
          .dev
        </Link>

        <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
            end
          >
            <HomeIcon /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            <UserIcon /> About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            <CodeIcon /> Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeClass : inactiveClass
            }
          >
            <MailIcon /> Contact
          </NavLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:ring-2 ring-indigo-500 transition-all text-xs"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}

function PageNavFooter() {
  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-4 text-xs font-semibold">
      <Link
        to="/"
        className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all flex items-center"
      >
        <HomeIcon /> Return Home
      </Link>
      <Link
        to="/about"
        className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all flex items-center"
      >
        <UserIcon /> About Me
      </Link>
      <Link
        to="/projects"
        className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all flex items-center"
      >
        <CodeIcon /> View Projects
      </Link>
      <Link
        to="/contact"
        className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all flex items-center"
      >
        <MailIcon /> Contact Me
      </Link>
    </div>
  );
}

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <section className="text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          Software Developer & STEM Enthusiast
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Building high-performance, accessible, and dynamic software.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">
            Heldana Gebremariam Teklu
          </span>
          . I combine mathematical logic, frontend architecture, and
          computational data analysis to build impactful web applications.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-all"
          >
            Explore Projects
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
          >
            Read My Journey
          </Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-6 pt-8">
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Frontend Expertise
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Crafting modular React user interfaces, stateful workflows, and
            clean responsive systems.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Data & Python
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Data analysis, Pandas multi-indexing routines, and structured matrix
            operations.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Problem Solver
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Competitive mathematics background applied to structured software
            design.
          </p>
        </div>
      </section>

      <PageNavFooter />
    </div>
  );
}

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          About Me & My Journey
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          From competitive mathematics during my high school years to modern web
          architecture and data science, I build software that solves actual
          real-world challenges.
        </p>
      </header>

      <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            How I Started Frontend Development
          </h2>
          <p>
            My structured journey into professional modern web development began
            through technical initiatives and immersive practice. This provided
            me with an environment to master modern core concepts—JavaScript
            ES6+, DOM manipulation, component architecture, responsive layout
            design, and API integrations.
          </p>
          <p>
            I immediately fell in love with web development because of its
            visual feedback loop—turning logical concepts into real, interactive
            applications that users can touch, navigate, and benefit from in
            real time.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Academic Journey & Mathematics Foundation
          </h2>
          <p>
            Throughout my high school natural sciences curriculum, I dedicated
            myself to rigorous analytical thinking. Participating in competitive
            regional and national mathematics competitions strengthened my
            ability to decompose complex problems into logical, executable
            steps.
          </p>
          <p>
            Alongside web development, I built a strong computational foundation
            in <strong>Python</strong>. Working with libraries such as{" "}
            <strong>NumPy</strong> and <strong>Pandas</strong> enabled me to
            write efficient data manipulation routines, multi-indexed groupings,
            and algorithmic calculations.
          </p>
        </section>

        <section className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900 space-y-3">
          <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200">
            Core Technical Competencies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-semibold pt-2">
            <span className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-center">
              React.js & Router
            </span>
            <span className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-center">
              JavaScript (ES6+)
            </span>
            <span className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-center">
              Tailwind CSS
            </span>
            <span className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-center">
              Python & Pandas
            </span>
            <span className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-center">
              WebRTC Mechanics
            </span>
            <span className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-center">
              Git & GitHub
            </span>
          </div>
        </section>
      </div>

      <PageNavFooter />
    </div>
  );
}

function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Featured Projects
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Selected applications and computational tools mapping custom data
          props into dynamic interface views.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-xs font-semibold text-indigo-500">
                {project.subtitle}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {project.summary}
              </p>
            </div>

            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 transition-colors pt-2"
            >
              View Full Specs & Details →
            </Link>
          </div>
        ))}
      </div>

      <PageNavFooter />
    </div>
  );
}

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Project Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          The project you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/projects")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <button
        onClick={() => navigate("/projects")}
        className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
      >
        ← Back to Projects List
      </button>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium">
          {project.subtitle}
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Project Overview
        </h3>
        <p>{project.description}</p>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white pt-2">
          Key Highlights
        </h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {project.keyFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold text-sm hover:bg-indigo-700"
            >
              Live Application
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-800 text-white dark:bg-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-900"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </div>

      <PageNavFooter />
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email address is required.";
    if (!formData.message.trim())
      newErrors.message = "Message content cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Get In Touch
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Feel free to reach out for collaborations or technical opportunities.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
        <a
          href="mailto:heldanagebremariam83@gmail.com"
          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-indigo-500 transition-colors"
        >
          📧 heldanagebremariam83@gmail.com
        </a>
        <a
          href="https://github.com/Heldana24"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:border-indigo-500 transition-colors"
        >
          💻 github.com/Heldana24
        </a>
      </div>

      {status === "success" && (
        <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm text-center font-semibold">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="p-4 rounded-xl bg-rose-100 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-sm text-center font-semibold">
          Please correct the errors in the form below.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5 p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
      >
        <div>
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-xs text-rose-500 mt-1 font-semibold">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-xs text-rose-500 mt-1 font-semibold">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
            Message
          </label>
          <textarea
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && (
            <p className="text-xs text-rose-500 mt-1 font-semibold">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-md hover:bg-indigo-700 disabled:opacity-50 transition-all"
        >
          {status === "submitting" ? "Sending Message..." : "Send Message"}
        </button>
      </form>

      <PageNavFooter />
    </div>
  );
}

function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center space-y-4">
      <h1 className="text-5xl font-black text-indigo-600 dark:text-indigo-400">
        404
      </h1>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
        The requested route does not exist.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm"
      >
        Return Home
      </Link>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
