import React from 'react';
import HeaderBlock from './components/HeaderBlock';

const App = () => (
  <>
    <HeaderBlock
      title="Учите слова онлайн"
      descr="Используйте карточки для запоминания и пополняйте активный словарный запас."
    />
    <HeaderBlock
      title="Нам нравится это"
      hideBackground
    />
  </>
);

export default App;
