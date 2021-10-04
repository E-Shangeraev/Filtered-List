import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
  const [active, setActive] = useState(false);

  const handleButtonClick = (): void => {
    setActive(!active);
  };

  return (
    <button
      type="button"
      className={clsx(styles.button, { [styles.active]: active })}
      onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default Button;
