import React from 'react';
import Head from './components/Head';
import Logo from './components/Logo';
import Nav from './components/Nav';
import MenuItem from './components/MenuItem';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Main from './components/Main';
import Card from './components/Card';

const navigationMenu = [
  { title: 'На главную' },
  { title: 'О сервисе' },
  { title: 'Категории слов' },
  { title: 'Контакты' },
];

const wordsList = [
  {
    eng: 'between',
    rus: 'между'
  },
  {
    eng: 'high',
    rus: 'высокий'
  },
  {
    eng: 'really',
    rus: 'действительно'
  },
  {
    eng: 'something',
    rus: 'что-нибудь'
  },
  {
    eng: 'most',
    rus: 'большинство'
  },
  {
    eng: 'anather',
    rus: 'другой'
  },
  {
    eng: 'much',
    rus: 'много'
  },
  {
    eng: 'family',
    rus: 'семья'
  },
  {
    eng: 'own',
    rus: 'личный'
  },
  {
    eng: 'out',
    rus: 'из/вне'
  },
  {
    eng: 'leave',
    rus: 'покидать'
  },
];

const App = () => (
  <>
    <Head fixed>
      <Logo>Учим слова</Logo>
      <Nav>
        {
          navigationMenu
            .map(({ title }, index) => (
              <MenuItem key={index} title={title} />
            ))
        }
      </Nav>
    </Head>
    <HeaderBlock>
      <Header>
        Учите слова онлайн
      </Header>
      <Paragraph>
        Используйте карточки для запоминания и пополняйте активный словарный запас.
      </Paragraph>
    </HeaderBlock>
    <Main>
      {
        wordsList
          .map(({ eng, rus }, index) => (
            <Card key={index} eng={eng} rus={rus} />
          ))
      }
    </Main>
    <HeaderBlock
      hideBackground
    >
      <Header>
        Еще один заголовок
      </Header>
      <Paragraph>
        Ну здорово же.
      </Paragraph>
    </HeaderBlock>
    <Head>
      <Logo>Учим слова</Logo>
      <Nav>
        {
          navigationMenu
            .map(({ title }, index) => (
              <MenuItem key={index} title={title} />
            ))
        }
      </Nav>
    </Head>
  </>
);

export default App;
