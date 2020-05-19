import React from 'react';
import s from './style.module.scss';

const Footer = ({ siteInfo, styles }) => {
  return (
    <footer className={s.footer} style={styles}>
      <div className={s.container}>
        <div className={s.footerLogo}>
          <span className={s.logo}>{siteInfo.siteName}</span>
          <span>{siteInfo.siteSlogan}</span>
        </div>
        <div>
          <p className={s.copyright}>
            © <a href={siteInfo.devSite}>{siteInfo.devName} 2020</a>
          </p>
          <p className={s.email}>
            E-mail: <a href={'mailto:' + siteInfo.contactEmail}>{siteInfo.contactEmail}</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
