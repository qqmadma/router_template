import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

function LayoutMain() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Outlet/>
      </div>
    </div>
  )
}

export default LayoutMain