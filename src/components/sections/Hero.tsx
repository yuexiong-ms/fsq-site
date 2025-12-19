import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg via-white to-primary-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex justify-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">
                Full-Self Quality
              <br />
              </span>
              Record Once,
              Replay Everywhere
              <br />
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-slate-600 mb-8 leading-relaxed"
            >
              FSQ delivers org-level regression testing across all platforms.
              Built on Model Context Protocol for AI-powered workflows that provide
              sustained headcount leverage, not just efficiency gains.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play size={20} /> Watch Demo
              </Button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                { value: '400K+', label: 'Test Steps' },
                { value: '75', label: 'Days Saved' },
                { value: '3', label: 'FTE Reduced' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
