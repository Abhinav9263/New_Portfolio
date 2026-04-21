import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { skillsData } from '@/data/portfolioData';

const Resume = () => {
  const topSkills = Object.entries(skillsData).flatMap(([category, skills]) => 
    skills.filter(s => s.level >= 80).map(s => ({ ...s, category }))
  ).slice(0, 10);

  return (
    <Layout>
      <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Download my resume or view a summary of my qualifications
            </p>
            <a
              href="/Abhinav_Resume_ML.pdf"
              download="Abhinav_Resume_ML.pdf"
              className="btn-primary inline-flex"
            >
              <Download className="w-5 h-5" /> Download Resume (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-6"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Resume Preview
              </h2>
              
              <div className="aspect-[8.5/11] bg-secondary rounded-lg overflow-hidden border border-border">
                <iframe 
                  src="/Abhinav_Resume_ML.pdf" 
                  className="w-full h-full border-none" 
                  title="Resume Preview"
                />
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="card-elevated p-6">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Top Skills
                </h2>
                <div className="space-y-3">
                  {topSkills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-elevated p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Quick Stats
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">12+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">2</div>
                    <div className="text-sm text-muted-foreground">Internships</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Workshops</div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6 border-l-4 border-l-primary">
                <h3 className="font-semibold text-foreground mb-2">Looking for opportunities in:</h3>
                <p className="text-muted-foreground">
                  Software Development, Machine Learning Engineering, Data Science, 
                  IoT Solutions, Full-Stack Development
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
