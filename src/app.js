import React from 'react';
import ReactDOM from 'react-dom';
import Preview from './Component/Preview';

const log = () => {
  console.log('click');
};

ReactDOM.render(
  <Preview
    src='img/ninja.png'
    name='This is a test'
    onClick={log}/>,
  document.getElementById('app')
);
