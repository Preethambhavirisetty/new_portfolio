import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentCommand, setCurrentCommand] = useState('');

  useEffect(() => {
    const duration = 3500; // 3.5 seconds
    const interval = 30; // Update every 30ms
    const increment = (100 / duration) * interval;

    // Simulate typing command
    const commandText = 'loading --dev-portfolio';
    let commandIndex = 0;
    const commandInterval = setInterval(() => {
      if (commandIndex < commandText.length) {
        setCurrentCommand(commandText.slice(0, commandIndex + 1));
        commandIndex++;
      } else {
        clearInterval(commandInterval);
      }
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(100, prev + increment);
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete(), 300);
          }, 200);
        }
        return newProgress;
      });
    }, interval);

    return () => {
      clearInterval(progressInterval);
      clearInterval(commandInterval);
    };
  }, [onComplete]);

  const generateProgressBar = (progress) => {
    const barLength = 50;
    const filled = Math.floor((progress / 100) * barLength);
    const empty = barLength - filled;
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${Math.floor(progress)}%`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="loading-screen"
        >
          <div className="loading-terminal-window">
            {/* Terminal Body */}
            <div className="loading-terminal-body">
              <div className="loading-terminal-content">
                <div className="loading-terminal-line">
                  <span className="loading-prompt">
                    <span className="loading-user">preetham</span>
                    <span className="loading-separator">@</span>
                    <span className="loading-host">portfolio</span>
                    <span className="loading-separator">:</span>
                    <span className="loading-path">~</span>
                    <span className="loading-separator">$</span>
                    {' '}
                  </span>
                  <span className="loading-command">
                    {currentCommand}
                    <span className="loading-cursor">█</span>
                  </span>
                </div>
                
                {currentCommand.length > 0 && (
                  <>
                    <div className="loading-terminal-line loading-output">
                      <div className="loading-title">DEV portfolio</div>
                    </div>
                    <div className="loading-terminal-line loading-output">
                      <div className="loading-progress-container">
                        <div className="loading-progress-bar">
                          {generateProgressBar(progress)}
                        </div>
                        <div className="loading-status">
                          {progress < 100 ? 'Loading...' : 'Complete!'}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

