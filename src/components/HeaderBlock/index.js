import React from 'react';
import s from './HeaderBlock.module.scss';

const HeaderBlock = ({ hideBackground = false, children }) => {
  const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
  return (
    <div className={s.cover} style={styleCover}>
      <dev className={s.wrap}>
        {children}
      </dev>
    </div>
  )
}

export default HeaderBlock;
