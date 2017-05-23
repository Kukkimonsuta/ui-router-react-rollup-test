import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';
import PropTypes from 'prop-types';

console.log(PropTypes);

const states = [{
  name: 'home',
  url: '/',
  component: () => <p>Home</p>
}];

const plugins = [
  pushStateLocationPlugin
];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView/>
  </UIRouter>,
  document.getElementById('root')
);