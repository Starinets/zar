import React from 'react';
import s from './HeaderBlock.module.scss';
import { ReactComponent as ReactLogoSvg } from '../../logo.svg';


const HeaderBlock = ({ title, hideBackground = false, descr = "" }) => {
  const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
  return (
    <div className={s.cover} style={styleCover}>
      <dev className={s.wrap}>
        {title && <h1 className={s.header}>{title}</h1>}
        <ReactLogoSvg />
        {descr && <p className={s.descr}>{descr}</p>}
      </dev>
    </div>
  )
}

export default HeaderBlock;