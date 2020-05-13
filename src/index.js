import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBlock from './components/HeaderBlock'
import './index.css'

const AppHeader = () => {
  return (
    <h1 className="header">Hello world, React.js</h1>
  )
};

const AppInput = () => {
  const placeholder = 'Type text...';
  
  return (
    <label htmlFor="search">
      <input id="search" placeholder={ placeholder } />
    </label>
  );
};

const AppList = () => {
  const items = ['Item1', 'Item2', 'Item3', 'Item4'];
  const firstItem = <li>Item0</li>;
  const isAuth = false;

  return (
    <ul>
      { isAuth ? firstItem : null }
      { items.map(item => <li>{ item }</li>) }
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

const App = () => (
  <>
    <HeaderBlock />
    <AppHeader />
    <AppInput />
    <AppList />
    <AppHeader />
    <AppList />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
