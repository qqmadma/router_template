import React from 'react';
import styles from './index.module.scss';
import { Avatar } from 'antd';

function LayoutHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ul className={styles['navbar-left']}>
          <li>aaa</li>
          <li>bbb</li>
          <li>ccc</li>
        </ul>

        <div className={styles['navbar-right']}>
          <span style={{ marginRight: 10 }}>xxx</span>
          <Avatar size={34} style={{ backgroundColor: '#87D068' }}>M</Avatar>
        </div>
      </div>
    </div>
  )
}

export default LayoutHeader