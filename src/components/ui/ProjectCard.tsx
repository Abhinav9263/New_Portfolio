import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
  timeline?: string;
  achievement?: string;
}

const ProjectCard = ({
  id,
  title,
  description,
  image,
  category,
  technologies,
  github,
  demo,
  timeline,
  achievement,
}: ProjectCardProps) => {
  const categoryColors: Record<string, string> = {
    'AI/ML': 'bg-primary/10 text-primary',
    'Software': 'bg-accent/10 text-accent-foreground',
    'IoT': 'bg-secondary text-secondary-foreground',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card-elevated overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category] || 'bg-secondary text-secondary-foreground'}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mb-4">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {description}
          </p>
          {(timeline || achievement) && (
            <div className="mt-3 space-y-1">
              {timeline && <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Timeline:</span> {timeline}</p>}
              {achievement && <p className="text-xs text-primary"><span className="font-semibold text-foreground">Achievement:</span> {achievement}</p>}
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Link
            to={`/projects/${id}`}
            className="text-sm font-medium text-primary flex items-center gap-1 hover:gap-2 transition-all"
          >
            View Details <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
