import React from 'react';
import s from './style.module.scss';
import { v4 as uuidv4 } from 'uuid';

const PageHeader = ({ siteInfo, menuList, styles }) => {

  const navList = menuList.map((item) => {
    return (
      <li className={s.menuItem} key={uuidv4(4)}>
        <a href={item.href}>{item.name}</a>
      </li>
    )
  });

  const LoginBtn = () => {
    return (
      <a
        className={s.btnLogin}
        href="/login"
        onClick={(evt) => evt.preventDefault()}
      >Вход</a>
    );
  };

  return (
    <header className={s.header} style={styles}>
      <div className={s.container}>
        <a href="/" className={s.logo}>{siteInfo.siteName}</a>
        <nav className={s.menu}>
          <ul className={s.menuList}>
            {navList}
          </ul>
        </nav>
        <LoginBtn />
      </div>
    </header>
  );
};

export default PageHeader;
