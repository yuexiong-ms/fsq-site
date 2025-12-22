import { motion } from 'framer-motion';
import { AnimatedMockup } from './AnimatedMockup';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-primary-bg to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 mb-6 bg-purple-50 rounded-full"
          >
            <span className="text-purple-primary font-semibold text-sm">
              HOW IT WORKS
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">
              Powerful
            </span>
            {' '}Workflow
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Record once in natural language, let AI generate the automation, and replay across all platforms.
          </p>
        </motion.div>

        {/* Animated Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatedMockup />
        </motion.div>
      </div>
    </section>
  );
};
