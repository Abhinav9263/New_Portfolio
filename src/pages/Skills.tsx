import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Code2, Globe, Database, Cpu, Brain, Users } from "lucide-react";
import "./Skills.css";

const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
];

const ROWS = [
  [
    { title: "Programming Languages", icon: Code2, items: ["Python", "C", "C++", "Java"] },
    { title: "Web Technologies", icon: Globe, items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Databases & Tools", icon: Database, items: ["MySQL", "MongoDB", "Supabase", "Git"] },
    { title: "Frameworks & Libraries", icon: Cpu, items: ["TensorFlow", "PyTorch", "OpenCV"] },
  ],
  [
    {
      title: "Core Concepts",
      icon: Brain,
      items: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "YOLO Object Detection",
        "Explainable AI (XAI)",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
    },
  ],
];

export default function Skills() {
  const stageRef = useRef();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 80;
      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 6000 + Math.random() * 3000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <Layout>
      <section className="skills-container min-h-screen bg-background section-padding" id="skills">
        {/* Header */}
        <div className="section-container">
          <motion.div
            className="text-center md:text-left mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
              Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">My Skills</h2>
            <div className="w-24 h-[4px] bg-primary mx-auto md:mx-0 mb-6 rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></div>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Technical expertise blended with creativity — explore my core competencies across software, ML, and tools.
            </p>
          </motion.div>
        </div>

        {/* Floating Orbs with page-load + hover highlight animation */}
        <motion.div
          className="skills-stage relative mx-auto mb-24 shadow-2xl"
          ref={stageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            width: "90%",
            maxWidth: "1200px",
            height: "550px",
            borderRadius: "32px",
            background: "radial-gradient(circle at 50% 50%, #ffffff, #f1f5f9), url(\"data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%2394a3b8' fill-opacity='0.4'/%3E%3C/svg%3E\")",
            backgroundBlendMode: "multiply",
            border: "1px solid rgba(0,0,0,0.08)",
            overflow: "hidden",
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.03), 0 20px 40px rgba(0,0,0,0.06)",
            position: "relative",
          }}
        >
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-circle group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.25,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12), 0 0 0 3px var(--primary)",
                background: "rgba(255,255,255,0.95)",
                zIndex: 10,
              }}
              style={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(0,0,0,0.1)",
                backdropFilter: "blur(16px)",
                cursor: "pointer",
                transition: "box-shadow 0.4s ease, background 0.4s ease, z-index 0s",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}
            >
              <motion.img
                src={s.logo}
                alt={s.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                  marginBottom: "8px",
                }}
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  transition: { duration: 0.5 },
                  filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.15))"
                }}
              />
              <span
                className="text-slate-800 font-bold tracking-tight transform transition-transform group-hover:scale-105"
                style={{
                  fontSize: "13px",
                }}
              >
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Table (Cards Section) */}
        <div className="skills-table section-container">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((col, colIndex) => (
                <motion.div
                  key={col.title}
                  className="skill-box bg-card hover:bg-card/90"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{
                    duration: 0.5,
                    delay: (rowIndex + colIndex) * 0.1,
                  }}
                >
                  <div className="flex items-center gap-4 mb-6 border-b border-border/60 pb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                      <col.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">{col.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {col.items.map((item, i) => (
                      <motion.span
                        key={i}
                        className="px-4 py-2 bg-secondary text-secondary-foreground border border-border/50 rounded-full text-[14.5px] font-medium shadow-sm hover:shadow-md hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
