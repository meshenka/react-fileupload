import React from 'react';
import ReactDOM from 'react-dom';
import Uploader from './Component/Uploader';

const log = () => {
  console.log('click');
};

ReactDOM.render(
  <Uploader
    src='img/ninja.png'
    name='This is a test'
    id="0"
    onClick={log}/>,
  document.getElementById('app')
);
