import React from 'react';
import s from './style.module.scss';

const Paragraph = ({ children }) => {
  return <p className={s.descr}>{children}</p>;
}

export default Paragraph;
