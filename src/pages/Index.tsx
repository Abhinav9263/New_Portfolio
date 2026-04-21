import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Brain,
  Code2,
  Cpu,
  Wifi,
  Award,
  FolderKanban,
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/portfolioData';

const stats = [
  { icon: FolderKanban, label: 'Projects', value: '15+' },
  { icon: Award, label: 'Certifications', value: '12+' },
  { icon: BookOpen, label: 'Workshops', value: '5+' },
];

const focusAreas = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Deep learning, NLP, Computer Vision, and predictive analytics'
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Full-stack web applications with React, Node.js, and databases'
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Microcontroller programming with Arduino and ESP32'
  },
  {
    icon: Wifi,
    title: 'IoT Solutions',
    description: 'Connected devices, sensor networks, and smart systems'
  },
];

const whyHireMe = [
  'Strong foundation in both AI/ML theory and practical implementation',
  'Experience building end-to-end solutions from hardware to cloud',
  'Proven ability to learn quickly and adapt to new technologies',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Index = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center" style={{ background: 'var(--gradient-hero)' }}>
        <div className="section-container">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Open to Opportunities
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              >
                Hi, I'm <span className="gradient-text">Abhinav</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-4"
              >
                Final-Year B.Tech CSE (AI & ML) | Software & IoT Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Passionate about building intelligent systems that solve real-world problems.
                Experienced in machine learning, full-stack development, and IoT solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Link to="/projects" className="btn-primary">
                  View Projects <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="/Abhinav_Resume_ML.pdf" download="Abhinav_Resume_ML.pdf" className="btn-outline">
                  <Download className="w-5 h-5" /> Download Resume
                </a>
                <Link to="/contact" className="btn-outline">
                  <Mail className="w-5 h-5" /> Contact Me
                </Link>
              </motion.div>
            </div>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src="images/photo.jpg?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" style={{ transform: 'scale(1.1)' }} />
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Code2 className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl pointer-events-none" />
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Areas of Expertise
            </h2>
            <p className="text-muted-foreground">
              Combining software skills with hardware knowledge to build complete solutions
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={item}
                className="card-elevated p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A selection of my recent work across AI, software, and IoT
              </p>
            </div>
            <Link
              to="/projects"
              className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-24 relative overflow-hidden bg-secondary/50">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] translate-y-1/2 mix-blend-multiply" />

        <div className="section-container relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative backdrop-blur-md bg-card/60 border border-border/50 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative Number */}
                <div className="absolute -right-4 -bottom-4 text-[150px] font-extrabold text-primary/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500 transform group-hover:scale-110 leading-none">
                  {index + 1}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg border border-primary/10">
                    <stat.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>

                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-6xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                      {stat.value.replace('+', '')}
                    </span>
                    <span className="text-5xl font-bold text-accent">+</span>
                  </div>

                  <div className="text-lg font-semibold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors duration-500 mt-2">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Hire Me?
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {whyHireMe.map((point, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex items-start gap-3 text-left p-4 rounded-lg bg-secondary/50"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{point}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <Link to="/about" className="btn-primary">
                Learn More About Me <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
