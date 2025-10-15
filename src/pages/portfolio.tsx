import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Home,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
  MessageSquare,
  Code2,
  ExternalLink,
  Calendar,
  MapPin,
  Building2,
  Award,
  BookOpen,
  Clock,
  Star,
  Users,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Server,
  Smartphone,
  Database,
  Palette,
  Terminal,
  ChevronRight,
  Layers,
  Activity,
  Coffee,
  Cpu,
  GitBranch,
  Package,
  Sparkles,
  School,
  FileCode,
  Rocket,
} from "lucide-react";

// About Component
const About: React.FC = () => {
  const stats = [
    { label: "GPA", value: "3.8/4.0", icon: GraduationCap },
    { label: "Projects Built", value: "8+", icon: Code2 },
    { label: "Languages", value: "6+", icon: Terminal },
    { label: "Commits This Year", value: "500+", icon: GitBranch },
  ];

  const interests = [
    "Web Development",
    "Machine Learning",
    "Cloud Computing",
    "Open Source",
    "Mobile Apps",
    "System Design",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600" />
                Who I Am
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                I'm a Computer Science student passionate about building
                software that makes a difference. Currently in my third year,
                I'm gaining real-world experience through my software
                engineering co-op while maintaining strong academic performance.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                My journey in CS started with curiosity about how apps work,
                leading me to dive deep into full-stack development, algorithms,
                and system design. I love tackling challenging problems and
                turning ideas into working applications.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source
                projects, participating in hackathons, or exploring the latest
                tech trends. I believe in continuous learning and building
                projects that push my boundaries.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Quick Info
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <School className="w-4 h-4 text-blue-600" />
                  <span>CS Major • Junior Year</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Boston, MA</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  <span>Software Engineering Co-op</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>william@university.edu</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Download Resume
              </button>
              <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                View Transcript
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dashboard Component (Education, Projects, Work combined)
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "projects" | "experience" | "education"
  >("projects");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack online marketplace with user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Full Stack",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop interface, and team features.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Web App",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and data visualization.",
      tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Frontend",
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging app with group chats, file sharing, and end-to-end encryption.",
      tech: ["React Native", "Firebase", "Node.js", "WebRTC"],
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Mobile",
      featured: true,
    },
    {
      title: "Algorithm Visualizer",
      description:
        "Interactive web app for visualizing sorting and pathfinding algorithms with step-by-step execution.",
      tech: ["Vue.js", "D3.js", "TypeScript", "Vite"],
      image:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Educational",
    },
    {
      title: "Budget Tracker",
      description:
        "Personal finance management app with expense tracking, budgeting tools, and financial insights.",
      tech: ["React", "Express", "MySQL", "Chart.js", "Plaid API"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "FinTech",
    },
    {
      title: "Recipe Finder",
      description:
        "Recipe discovery platform with ingredient-based search, meal planning, and nutritional information.",
      tech: ["Next.js", "Spoonacular API", "Redis", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      type: "Web App",
    },
    {
      title: "Portfolio Generator",
      description:
        "CLI tool that generates customizable portfolio websites from JSON configuration files.",
      tech: ["Node.js", "Commander.js", "Handlebars", "Webpack"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      githubUrl: "#",
      type: "Developer Tool",
    },
  ];

  const experience = {
    current: {
      title: "Software Engineering Co-op",
      company: "TechCorp Solutions",
      location: "Boston, MA",
      period: "Jan 2024 - Present",
      type: "Co-op",
      description:
        "Working on full-stack development for enterprise applications as part of my co-op program.",
      responsibilities: [
        "Developing RESTful APIs using Node.js and Express for microservices architecture",
        "Building responsive React components for customer-facing dashboard",
        "Writing unit and integration tests achieving 85% code coverage",
        "Participating in agile ceremonies and code reviews",
        "Collaborating with senior developers on system design decisions",
      ],
      skills: ["React", "Node.js", "PostgreSQL", "Docker", "Jest", "AWS"],
    },
    projects: [
      {
        title: "Open Source Contributor",
        organization: "Various Projects",
        period: "2023 - Present",
        description:
          "Active contributor to multiple open-source projects on GitHub.",
        highlights: [
          "Contributed to 5+ open source projects with 30+ merged PRs",
          "Fixed bugs and added features to popular npm packages",
          "Participated in Hacktoberfest 2023",
        ],
      },
      {
        title: "Teaching Assistant",
        organization: "University CS Department",
        period: "Fall 2023",
        description: "TA for Introduction to Programming course.",
        highlights: [
          "Conducted weekly lab sessions for 30+ students",
          "Graded assignments and provided detailed feedback",
          "Held office hours to help students debug code",
        ],
      },
    ],
  };

  const education = {
    degree: {
      title: "Bachelor of Science in Computer Science",
      school: "Northeastern University",
      period: "2021 - 2025 (Expected)",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List - Fall 2021, Spring 2022, Fall 2022",
        "Member of ACM Student Chapter",
        "Hackathon Winner - NEU Hacks 2023",
      ],
    },
    coursework: {
      completed: [
        "Data Structures & Algorithms",
        "Object-Oriented Design",
        "Computer Systems",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
      ],
      current: [
        "Machine Learning",
        "Operating Systems",
        "Computer Networks",
        "Mobile App Development",
      ],
    },
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
      },
      {
        name: "Full Stack Web Development",
        issuer: "freeCodeCamp",
        date: "2022",
      },
    ],
  };

  const tabIcons = {
    projects: FolderOpen,
    experience: Briefcase,
    education: GraduationCap,
  };

  return (
    <section id="dashboard" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Professional <span className="text-blue-600">Dashboard</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore my academic journey, hands-on projects, and professional
          experience
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(["projects", "experience", "education"] as const).map((tab) => {
            const Icon = tabIcons[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="capitalize">{tab}</span>
                {tab === "projects" && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {projects.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div>
              {/* Featured Projects */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  Featured Projects
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.featured)
                    .map((project, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                              {project.type}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                                +{project.tech.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex gap-4 pt-4 border-t border-gray-100">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live Demo</span>
                              </a>
                            )}
                            <a
                              href={project.githubUrl}
                              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                            >
                              <Github className="w-4 h-4" />
                              <span>Code</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* All Projects */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  All Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects
                    .filter((p) => !p.featured)
                    .map((project, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-base font-semibold text-gray-900">
                            {project.title}
                          </h4>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.githubUrl}
                            className="text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Current Co-op */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {experience.current.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                        Current
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span>{experience.current.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.current.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.current.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {experience.current.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experience.current.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.current.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Experience */}
              <div className="grid md:grid-cols-2 gap-6">
                {experience.projects.map((proj, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {proj.title}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {proj.period}
                      </span>
                    </div>
                    <p className="text-blue-600 text-sm mb-3">
                      {proj.organization}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {proj.description}
                    </p>
                    <ul className="space-y-1">
                      {proj.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-8 animate-fadeIn">
              {/* Degree Information */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {education.degree.title}
                    </h3>
                    <p className="text-blue-600 text-lg font-medium">
                      {education.degree.school}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {education.degree.period}
                      </span>
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <Award className="w-4 h-4" />
                        GPA: {education.degree.gpa}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {education.degree.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-blue-600" />
                    Completed Coursework
                  </h4>
                  <div className="space-y-2">
                    {education.coursework.completed.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <ChevronRight className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Current Semester
                  </h4>
                  <div className="space-y-2">
                    {education.coursework.current.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Certifications
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {education.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-semibold text-gray-900">
                            {cert.name}
                          </h5>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                        <span className="text-sm text-blue-600 font-medium">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "william@university.edu",
      color: "blue",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/william",
      color: "blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/williamriser",
      color: "gray",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
          Get In <span className="text-blue-600">Touch</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          I'm always interested in internship opportunities, project
          collaborations, or just a friendly chat about tech!
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <a
                  key={index}
                  href={
                    method.label === "Email"
                      ? `mailto:${method.value}`
                      : `https://${method.value}`
                  }
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={
                    method.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="group flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`p-3 ${
                      method.color === "blue" ? "bg-blue-50" : "bg-gray-50"
                    } rounded-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        method.color === "blue"
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{method.label}</div>
                    <div className="text-gray-900 font-medium">
                      {method.value}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto transition-colors" />
                </a>
              );
            })}

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-green-700 font-medium">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Looking for Summer 2024 internships and part-time opportunities
                during the semester.
              </p>
            </div>

            {/* Coffee Chat */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <Coffee className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700 font-medium">Let's Chat!</span>
              </div>
              <p className="text-gray-700 text-sm">
                I love connecting with fellow developers and students. Feel free
                to reach out!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 mb-2 text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 mb-2 text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 mb-2 text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                    placeholder="Let's collaborate!"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                    placeholder="Tell me about your idea or just say hi!"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);

      const sections = ["home", "about", "dashboard", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "dashboard", label: "Experience", icon: Layers },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-gray-900 font-bold text-xl">
                William<span className="text-blue-600">.</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-medium transition-all ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-0.5">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Code2 className="w-16 h-16 text-blue-600" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">William Riser</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Computer Science Student at Northeastern
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Software Engineering Co-op • Full Stack Developer • Open Source
            Contributor
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection("dashboard")}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/williamriser"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/william"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:william@university.edu"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Component Sections */}
      <About />
      <Dashboard />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} William Riser. Built with React &
            TypeScript
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors hover:shadow-md z-40"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
