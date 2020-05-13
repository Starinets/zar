import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  const margin = 40;
  const headerStyle = {
    color: 'red',
    marginLeft: `${ margin }px`,
    marginBottom: `${ margin }px`,
  };

  return (
    <h1 style={ headerStyle }>Hello world, React.js</h1>
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
    <AppHeader />
    <AppInput />
    <AppList />
    <AppHeader />
    <AppList />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
