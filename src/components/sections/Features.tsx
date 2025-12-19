import { motion } from 'framer-motion';
import { Radio, Repeat, Layers, Zap, Shield, TrendingUp } from 'lucide-react';
import { FeatureCard } from '../common/FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: Radio,
      title: 'Record & Replay',
      description: 'Capture user interactions once and replay as automated tests across all platforms. No manual script writing required.',
      gradient: 'from-purple-primary to-purple-secondary',
    },
    {
      icon: Layers,
      title: 'MCP Integration',
      description: 'Built on Model Context Protocol, enabling AI-powered workflows that understand and adapt to your testing needs.',
      gradient: 'from-purple-secondary to-blue-accent',
    },
    {
      icon: Repeat,
      title: 'Cross-Platform',
      description: 'Seamlessly test across Windows, Android, iOS, and macOS with a single test recording.',
      gradient: 'from-blue-accent to-purple-primary',
    },
    {
      icon: Zap,
      title: 'Org-Level Impact',
      description: 'Sustained headcount leverage with 400K+ automated test steps executed weekly, not just individual efficiency gains.',
      gradient: 'from-purple-primary to-purple-secondary',
    },
    {
      icon: Shield,
      title: 'Regression Quality Gate',
      description: 'AI-powered agents operate as a core component of your release quality gate, ensuring comprehensive coverage.',
      gradient: 'from-purple-secondary to-blue-accent',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Scaling',
      description: 'Save ~75 person-days per week and reduce ~3 FTE per platform. These gains are ongoing and repeatable.',
      gradient: 'from-blue-accent to-purple-primary',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-primary-bg">
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
              FEATURES
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Test Automation,{' '}
            <span className="bg-gradient-to-r from-purple-primary to-purple-secondary bg-clip-text text-transparent">
              Reimagined
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            FSQ transforms how organizations approach regression testing with AI-powered
            automation that delivers sustained, org-level impact.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Platform Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Supported Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Windows', icon: '🪟' },
              { name: 'Android', icon: '🤖' },
              { name: 'iOS', icon: '🍎' },
              { name: 'macOS', icon: '💻' },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-purple-50"
              >
                <span className="text-3xl">{platform.icon}</span>
                <span className="font-semibold text-slate-900">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
