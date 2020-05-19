import React from 'react';
import s from './style.module.scss';

const Button = ({ href, children }) => {
  return (
    <div className={s.btnWrap}>
      <a className={s.btn} href={href}>{children}</a>
    </div>
  );
};

export default Button;
