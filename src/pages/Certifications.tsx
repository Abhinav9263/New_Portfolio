import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { certificationsData } from '@/data/portfolioData';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<{ name: string; issuer: string; year: string; link: string; image?: string } | null>(null);

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
              Certifications
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional certifications and credentials across various domains
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="card-elevated p-6"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.certificates.map((cert, index) => (
                    <motion.button
                      key={cert.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedCert(cert)}
                      className="w-full text-left rounded-lg bg-secondary/50 hover:bg-secondary transition-colors overflow-hidden group border border-transparent hover:border-primary/20"
                    >
                      {cert.image && (
                        <div className="w-full h-56 md:h-64 bg-secondary/20 flex items-center justify-center p-4 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="max-w-full max-h-full object-contain rounded drop-shadow-md transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-xl z-0"
                          />
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-4 p-4">
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <span className="text-sm text-primary font-medium">{cert.year}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-6 max-w-4xl w-full shadow-xl max-h-[95vh] overflow-auto flex flex-col items-center"
            >
              <div className="flex items-start justify-between mb-4 w-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {selectedCert.image ? (
                <div className="w-full mb-6 flex justify-center bg-secondary/10 rounded-xl p-2">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              ) : null}

              <div className="w-full">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {selectedCert.name}
                </h3>
                <p className="text-muted-foreground mb-1">{selectedCert.issuer}</p>
                <p className="text-sm text-primary mb-6">Issued: {selectedCert.year}</p>
                
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <ExternalLink className="w-5 h-5" /> View Credential
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Certifications;
