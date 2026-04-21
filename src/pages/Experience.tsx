import { motion } from 'framer-motion';
import { Briefcase, Users, Presentation, Trophy, Laptop } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { experienceData } from '@/data/portfolioData';

const typeIcons: Record<string, typeof Briefcase> = {
  internship: Briefcase,
  leadership: Users,
  workshop: Presentation,
  hackathon: Trophy,
  Freelance: Laptop,
};

const typeLabels: Record<string, string> = {
  internship: 'Internship',
  leadership: 'Leadership',
  workshop: 'Workshop',
  hackathon: 'Hackathon',
  Freelance: 'Freelance',
};

const Experience = () => {
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
              Experience
            </h1>
            <p className="text-lg text-muted-foreground">
              Internships, leadership roles, workshops, and hackathons that shaped my journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {experienceData.map((exp, index) => {
              const Icon = typeIcons[exp.type] || Briefcase;
              
              return (
                <motion.div
                  key={`${exp.title}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  {/* Timeline line */}
                  {index !== experienceData.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>

                  <div className="card-elevated p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                        {typeLabels[exp.type]}
                      </span>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
