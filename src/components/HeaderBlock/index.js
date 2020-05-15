import React from 'react';
import s from './HeaderBlock.module.scss';
import ReactLogoPng from '../../logo.png';
import {ReactComponent as ReactLogoSvg} from '../../logo.svg';


const HeaderBlock = () => {
  return (
    <div className={ s.cover }>
      <dev className={ s.wrap }>
        <h1 className={ s.header }>Учите слова онлайн.</h1>
        <img src={ ReactLogoPng } alt="лого react.js" />
        <ReactLogoSvg />
        <p className={ s.descr }>Используйте карточки для запоминания и пополняйте активный словарный запас.</p>
      </dev>
    </div>
  )
}

export default HeaderBlock;