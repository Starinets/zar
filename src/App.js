import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';

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
