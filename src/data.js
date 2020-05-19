// Список слов для карточек
const wordsList = [
  {
    eng: 'listen',
    rus: 'слушать',
    img: 'https://picsum.photos/200/150?random=1'
  },
  {
    eng: 'read',
    rus: 'читать',
    img: 'https://picsum.photos/200/150?random=2'
  },
  {
    eng: 'close',
    rus: 'закрыть',
    img: 'https://picsum.photos/200/150?random=3'
  },
  {
    eng: 'learn',
    rus: 'учить',
    img: 'https://picsum.photos/200/150?random=4'
  },
  {
    eng: 'understand',
    rus: 'понимать',
    img: 'https://picsum.photos/200/150?random=5'
  },
  {
    eng: 'carry',
    rus: 'нести',
    img: 'https://picsum.photos/200/150?random=6'
  },
  {
    eng: 'touch',
    rus: 'коснуться',
    img: 'https://picsum.photos/200/150?random=7'
  },
  {
    eng: 'cook',
    rus: 'готовить',
    img: 'https://picsum.photos/200/150?random=8'
  },
  {
    eng: 'see',
    rus: 'видеть',
    img: 'https://picsum.photos/200/150?random=9'
  }
];

// Информация о сайте и разработчиках
const siteInfo = {
  siteName: 'LearnWords',
  siteSlogan: 'Выучи слова онлайн',
  contactEmail: 'contact@company.com',
  devSite: '#',
  devName: 'SomeCompany'
};

// Пункты меню
const menuList = [
  {
    name: 'Как это',
    href: '#howto'
  },
  {
    name: 'Все наборы',
    href: '#sets'
  },
  {
    name: 'Тренировка',
    href: '#train'
  },
  {
    name: 'Учиться',
    href: '#learn'
  }
];

// Стили для хедера
const pageHeaderStyles = {
  backgroundColor: '#1a3e70',
  color: '#ffffff'
};

// Стили для футера
const pageFooterStyles = {
  backgroundColor: '#37383c',
  color: '#ffffff'
};

module.exports = {
  wordsList,
  siteInfo,
  menuList,
  pageHeaderStyles,
  pageFooterStyles,
}
