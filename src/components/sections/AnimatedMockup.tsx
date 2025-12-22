import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Video, Eye, Play, ShieldCheck, ChevronDown } from 'lucide-react';

export const AnimatedMockup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);

  const steps = [
    {
      title: 'Record',
      icon: Video,
      description: 'Capture real user interactions',
      color: 'from-purple-primary to-purple-secondary',
    },
    {
      title: 'Review',
      icon: Eye,
      description: 'AI converts to test logic',
      color: 'from-purple-secondary to-blue-accent',
    },
    {
      title: 'Replay',
      icon: Play,
      description: 'Run tests deterministically',
      color: 'from-blue-accent to-purple-primary',
    },
    {
      title: 'Guard',
      icon: ShieldCheck,
      description: 'Surface real regressions',
      color: 'from-purple-primary to-purple-secondary',
    },
  ];

  const codeBlocks = [
    {
      step: 'record',
      lines: [
        { text: 'fsq.record', type: 'command' },
        { text: '  llm-engine start', type: 'code' },
        { text: '  "open edge browser and navigate to bing home page"', type: 'string' },
      ],
    },
    {
      step: 'review',
      lines: [
        { text: 'fsq.review', type: 'command' },
        { text: '  case_review', type: 'code' },
      ],
    },
    {
      step: 'replay',
      lines: [
        { text: 'fsq.replay', type: 'command' },
        { text: '  browser_launch()', type: 'code' },
        { text: '  browser_navigate("https://www.bing.com")', type: 'code' },
        { text: '  browser_close()', type: 'code' },
      ],
    },
    {
      step: 'guard',
      lines: [
        { text: 'fsq.guard', type: 'command' },
        { text: '  CI.fsq.replay == true', type: 'code' },
      ],
    },
  ];

  const stepKeywords = ['record', 'review', 'replay', 'guard'];

  const commandText = 'fsq run';

  useEffect(() => {
    // Typing animation - only run once
    if (!typingDone) {
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex <= commandText.length) {
          setTypedText(commandText.slice(0, charIndex));
          charIndex++;
        } else {
          setTypingDone(true);
          clearInterval(typeInterval);
        }
      }, 150);

      return () => clearInterval(typeInterval);
    }
  }, [typingDone]);

  useEffect(() => {
    // Line progression within current step
    const currentBlock = codeBlocks[currentStep];
    const subLineCount = currentBlock.lines.length - 1; // exclude command line
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        // Stop at the last line, don't cycle back
        if (prev >= subLineCount - 1) {
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    // Step progression
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setCurrentLine(0);
    }, 2500);

    return () => {
      clearInterval(lineInterval);
      clearInterval(stepInterval);
    };
  }, [steps.length, currentStep]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-50 via-white to-purple-50/50 rounded-2xl p-8 overflow-hidden border border-slate-200/80 shadow-xl">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100/20 rounded-full blur-3xl" />

      {/* Header with command */}
      <div className="relative z-10 text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-slate-800 rounded-lg px-4 py-2"
        >
          <span className="text-slate-400 font-mono text-lg">$ </span>
          <span className="text-white font-mono text-lg">{typedText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="text-purple-400 font-mono text-lg"
          >
            |
          </motion.span>
        </motion.div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6">
        {/* Code editor panel */}
        <div className="flex-1">
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
            {/* Editor header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-slate-400 text-sm font-mono">test.fsq</span>
            </div>

            {/* Code content */}
            <div className="p-4 font-mono text-sm leading-relaxed">
              {codeBlocks.map((block, blockIndex) => {
                const isCurrentBlock = block.step === stepKeywords[currentStep];
                return (
                  <div
                    key={block.step}
                    className={`transition-all duration-300 ${blockIndex > 0 ? 'mt-3' : ''} ${
                      isCurrentBlock ? 'bg-purple-500/20 -mx-4 px-4 py-2 border-l-2 border-purple-400' : 'py-1'
                    }`}
                  >
                    {block.lines.map((line, lineIndex) => {
                      const isSubLine = lineIndex > 0;
                      const subLineIndex = lineIndex - 1;
                      const isCurrentSubLine = isCurrentBlock && isSubLine && subLineIndex === currentLine;

                      return (
                        <div key={lineIndex} className="whitespace-pre">
                          {line.type === 'command' ? (
                            <span className={isCurrentBlock ? 'text-white font-semibold' : 'text-purple-400'}>{line.text}</span>
                          ) : line.type === 'string' ? (
                            <span className={isCurrentSubLine ? 'text-green-300 font-semibold' : 'text-green-400'}>
                              {isCurrentSubLine ? '> ' + line.text.substring(2) : line.text}
                            </span>
                          ) : (
                            <span className={isCurrentSubLine ? 'text-white font-semibold' : 'text-slate-300'}>
                              {isCurrentSubLine ? '> ' + line.text.substring(2) : line.text}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Steps visualization */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isPast = index < currentStep;
            // Check if current step is done (on last sub-line)
            const currentBlock = codeBlocks[currentStep];
            const subLineCount = currentBlock.lines.length - 1;
            const isCurrentStepDone = isActive && currentLine >= subLineCount - 1;

            return (
              <div key={step.title}>
                <motion.div
                  animate={{
                    scale: isActive ? 1.02 : 1,
                    x: isActive ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white shadow-lg ring-1 ring-slate-200'
                      : isPast
                      ? 'bg-white/80 shadow-sm'
                      : 'bg-white/50'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.color} ${
                      !isActive && !isPast ? 'opacity-50' : ''
                    }`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold ${isActive ? 'text-slate-800' : isPast ? 'text-slate-700' : 'text-slate-500'}`}>
                      {step.title}
                    </div>
                    <div className={`text-sm ${isActive ? 'text-slate-600' : isPast ? 'text-slate-500' : 'text-slate-400'}`}>
                      {step.description}
                    </div>
                  </div>
                  {(isPast || isCurrentStepDone) && (
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ChevronDown
                      className={`transition-colors duration-300 ${
                        index < currentStep ? 'text-purple-primary' : 'text-slate-300'
                      }`}
                      size={20}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
