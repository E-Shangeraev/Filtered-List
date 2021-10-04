import React from 'react';
import Button from '../button/Button';

import styles from './SearchPanel.module.scss';

const buttons = ['.org', '.com', '.biz'];

const searchPanel: React.FC = () => {
  return (
    <div className={styles.searchPanel}>
      <div className="wrapper">
        <div className={styles.container}>
          <div className={styles.searchField}>
            <label className={styles.label} htmlFor="input">
              Search
            </label>
            <input
              className={styles.input}
              type="text"
              id="input"
              placeholder="Enter Name"
            />
          </div>
          <div className={styles.searchButtons}>
            <span className={styles.label}>Show only</span>
            <ul className={styles.buttonsList}>
              {buttons.map(btnText => (
                <li key={btnText}>
                  <Button text={btnText} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchPanel;
