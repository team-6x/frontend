import React from 'react';
import styles from './styles.module.scss';

const Card = ({
  highlight,
  preview,
  children,
}: React.PropsWithChildren<{ highlight?: boolean; preview?: boolean }>) => (
  <div
    className={`${styles.card} ${highlight ? styles.card_highlight : ''} ${preview ? styles.card_preview : ''}`}
  >
    {children}
  </div>
);

export default Card;
