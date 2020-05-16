import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Card from './components/Card';

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
    <HeaderBlock>
      <Header>
        Учите слова онлайн
      </Header>
      <Paragraph>
        Используйте карточки для запоминания и пополняйте активный словарный запас.
      </Paragraph>
    </HeaderBlock>
    <div>
      {
        wordsList
          .map(({ eng, rus }, index) => (
            <Card key={index} eng={eng} rus={rus} />
          ))
      }
    </div>
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
  </>
);

export default App;
