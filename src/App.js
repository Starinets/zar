import React from 'react';

import PageHeader from './components/PageHeader/';
import HeaderBlock from './components/HeaderBlock/';
import Header from './components/Header/';
import Paragraph from './components/Paragraph/';
import CardBlock from './components/CardBlock/';
import Footer from './components/Footer/';
import Button from './components/Button/';
import { wordsList, siteInfo, menuList, pageHeaderStyles, pageFooterStyles } from './data.js';

import backGround1 from './images/backGround1.jpg';
import backGround2 from './images/backGround2.jpg';

const App = () => {
  return (
    <>
      <PageHeader siteInfo={siteInfo} menuList={menuList} styles={pageHeaderStyles} />
      <HeaderBlock id={'learn'} bgImage={backGround1}>
        <Header>
          Учите английский онлайн
        </Header>
        <Paragraph>
          Используйте карточки для запоминания и повторения
        </Paragraph>
        <Button href={'#howto'}>
          Узнать больше
        </Button>
      </HeaderBlock>
      <HeaderBlock id={'howto'} hideBackground>
        <Header>
          Как это работает
        </Header>
        <Paragraph>
          Карточки для изучения языка - это набор наиболее частотных слов по определенной теме. Интервальный просмотр
          карточек поможет вам увеличить словарный запас, узнать правильное произношение каждого слова, связав его с
          определённым изображением. А ещё мы подготовили для вас расписание для изучения и повторения на каждый день.
          Карточки включают 100500 самых употребляемых английских слов, разбитых на группы по темам.
        </Paragraph>
        <Paragraph>
          Начните изучать английский прямо сейчас!
        </Paragraph>
        <Button href={'#train'}>
          Вперёд!
        </Button>
      </HeaderBlock>
      <CardBlock id={'train'} wordsList={wordsList} hideBackground>
        <Button href={'#sets'}>
          Тренировать
        </Button>
      </CardBlock>
      <HeaderBlock id={'sets'} bgImage={backGround2}>
        <Header>
          Начни учить английский
        </Header>
        <Paragraph>
          У нас ещё много карточек со словами
        </Paragraph>
        <Button href={'#learn'}>
          Покажи мне
        </Button>
      </HeaderBlock>
      <Footer siteInfo={siteInfo} styles={pageFooterStyles} />
    </>
  );
}

export default App;
