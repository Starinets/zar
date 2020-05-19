import React from 'react';
import s from './style.module.scss';
import Card from '../Card/';
import { v4 as uuidv4 } from 'uuid';

const CardBlock = ({ id, wordsList, hideBackground = false, children }) => {
  const styleCover = hideBackground ? { backgroundImage: 'none' } : {};

  const cards = wordsList.map(({ eng, rus, img }) => {
    return <Card key={uuidv4(6)} eng={eng} rus={rus} img={img} />;
  });

  return (
    <section
      id={id}
      className={s.cover}
      style={styleCover}
    >
      <div className={s.wrap}>
        <h1 className={s.header}>Запоминай, тренируй, повторяй</h1>
        <div className={s.cards}>
          {cards}
        </div>
        {children}
      </div>
    </section>
  );
};

export default CardBlock;
