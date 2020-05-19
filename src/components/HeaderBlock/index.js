import React from 'react';
import s from './style.module.scss';

const HeaderBlock = ({ id, hideBackground = false, bgImage, children }) => {
  const styleCover = hideBackground ? { backgroundImage: 'none' } : {};

  if (bgImage) {
    styleCover.backgroundImage = 'url(' + bgImage + ')';
  }

  return (
    <section
      id={id}
      className={s.cover}
      style={styleCover}
    >
      <div className={s.wrap}>
        {children}
      </div>
    </section>
  );
};

export default HeaderBlock;
