import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CheckCircle, Zap } from 'lucide-react';

export const AnimatedMockup = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    {
      title: '1. Record Test in Natural Language',
      items: [
        { icon: CheckCircle, text: 'Scenario: Use Copilot to summarize a Wikipedia page', color: 'text-blue-600', status: '📝' },
        { icon: CheckCircle, text: 'When I enter "https://en.wikipedia.org/wiki/Edge"', color: 'text-slate-600', status: '→' },
        { icon: CheckCircle, text: 'Then I should see a summary of Edge on Copilot side', color: 'text-slate-600', status: '✓' },
      ],
    },
    {
      title: '2. AI Records & Generates Code',
      items: [
        { icon: Zap, text: 'Browser Preview: Capturing user actions', color: 'text-purple-500', status: '🎬' },
        { icon: Zap, text: 'AI Record: Converting to automation steps', color: 'text-purple-500', status: '🤖' },
        { icon: CheckCircle, text: 'MCP Server: Generating cross-platform code', color: 'text-green-500', status: '✓' },
      ],
    },
    {
      title: '3. Replay Across All Platforms',
      items: [
        { icon: CheckCircle, text: 'Windows: Test passed ✓', color: 'text-green-500', status: '💻' },
        { icon: CheckCircle, text: 'Mac: Test passed ✓', color: 'text-green-500', status: '🍎' },
        { icon: CheckCircle, text: 'Android & iOS: Tests passed ✓', color: 'text-green-500', status: '📱' },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [scenes.length]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-2xl p-8 overflow-hidden border border-purple-100 shadow-2xl">
      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"
      />

      {/* Mockup window */}
      <div className="relative z-10">
        {/* Window header */}
        <div className="flex items-center justify-between bg-white rounded-t-xl px-4 py-3 border-b border-slate-200">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="text-slate-600 text-sm font-medium">FSQ Test Studio</div>
          <div className="w-16" />
        </div>

        {/* Content area */}
        <div className="bg-white/80 backdrop-blur-sm rounded-b-xl p-6 min-h-[280px] border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Avatar and title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-primary to-blue-accent flex items-center justify-center text-white font-bold text-sm">
                  FSQ
                </div>
                <div className="text-slate-800 font-semibold">{scenes[currentScene].title}</div>
              </div>

              {/* Items */}
              <div className="space-y-4">
                {scenes[currentScene].items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="text-xl mt-0.5">{item.status}</span>
                      <div className="flex-1">
                        <span className={item.color}>{item.text}</span>
                      </div>
                      <Icon className={`${item.color} flex-shrink-0`} size={20} />
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 3.5, ease: 'linear' }}
                className="h-1 bg-gradient-to-r from-purple-primary to-blue-accent rounded-full mt-6 origin-left"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scene indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {scenes.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                scale: currentScene === index ? 1.2 : 1,
                opacity: currentScene === index ? 1 : 0.3,
              }}
              className={`w-2 h-2 rounded-full ${
                currentScene === index ? 'bg-purple-primary' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
