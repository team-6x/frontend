import React, { useState, ReactNode, useEffect } from 'react';
import styles from './styles.module.scss';

interface TooltipProps {
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <>
      <div className={styles.tooltip}>
        <button
          className={styles.button}
          onClick={() => setIsVisible(prev => !prev)}
          type="button"
        />
        {isVisible && (
          <div
            className={styles.tooltip__content}
            onClick={() => setIsVisible(false)}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;
