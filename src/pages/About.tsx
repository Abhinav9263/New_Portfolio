import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Lightbulb } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const interests = [
  'Artificial Intelligence & Machine Learning',
  'Computer Vision & Image Processing',
  'Internet of Things (IoT)',
  'Embedded Systems',
  'Cloud Computing',
  'Open Source Development',
];

const strengths = [
  { title: 'Problem Solver', description: 'Analytical thinking to break down complex problems into manageable solutions' },
  { title: 'Quick Learner', description: 'Ability to rapidly adapt to new technologies and frameworks' },
  { title: 'Team Player', description: 'Experience collaborating in cross-functional teams and leading projects' },
  { title: 'Detail Oriented', description: 'Focus on code quality, documentation, and best practices' },
];

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering (AI & ML)',
    institution: 'Bengal Institute of Technology, Kolkata, West Bengal',
    duration: '2023 - 2027',
    grade: 'CGPA: 7.24/10(Current upto 4th Semester)',
    description: 'Specialization in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and natural language processing.',
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'RN PR High School Jalalabad, Asarganj, Munger, Bihar',
    duration: '2020 - 2022',
    grade: 'Percentage: 62.4%',
    description: 'Science stream with Physics, Chemistry and Mathematics.',
  },
  {
    degree: 'Secondary (X)',
    institution: 'RN & PR High School Jalalabad, Asarganj, Munger, Bihar',
    duration: '2020',
    grade: 'Percentage: 78.6%',
    description: 'Completed secondary education with distinction.',
  },
];


const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto">
                <div className="rounded-2xl overflow-hidden border-4 border-card shadow-xl">
                  <img
                    src="images/About_Me_Pic.jpeg"
                    alt="Profile"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About Me
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a final-year Computer Science Engineering student specializing in Artificial Intelligence
                and Machine Learning. My passion lies in bridging the gap between intelligent software
                and physical hardware to create solutions that make a real impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in developing ML models, building web applications, and creating
                IoT prototypes, I bring a unique perspective to problem-solving. I believe in continuous
                learning and staying updated with the latest advancements in technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Career Objective
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To secure a challenging position in a dynamic organization where I can leverage my skills
              in AI/ML, software development, and IoT to contribute to innovative projects while
              continuously growing as a professional. I aim to work on solutions that have a positive
              impact on society and push the boundaries of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            title="Areas of Interest"
            subtitle="Technologies and domains I'm passionate about"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {interests.map((interest, index) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {interest}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <SectionHeading
            title="Strengths & Mindset"
            subtitle="What I bring to the table"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{strength.title}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            title="Education"
            subtitle="My academic journey"
          />

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <GraduationCap className="w-3 h-3 text-primary-foreground" />
                </div>

                <div className="card-elevated p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-primary font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-primary mb-2">{edu.grade}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
