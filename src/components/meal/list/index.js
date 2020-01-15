import React from 'react';
import styles from './meal-list.module.scss';

const MealList = ({ children }) => (
  <div className={styles.container}>
    { children }
  </div>
);

export { MealList, };
