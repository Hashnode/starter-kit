import React from 'react';
import styles from './rainbow.module.css';

export const Rainbow: React.FC = () => {
  return (
    <div className={`${styles.rainbowContainer} dark:${styles.dark}`}> 
      <div className={styles.jumbo}></div>
    </div>
  );
};
