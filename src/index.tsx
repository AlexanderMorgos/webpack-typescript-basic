import './polyfill';
import 'react-hot-loader';

import React from 'react';
import { render } from 'react-dom';

import App from './app';

function initializeApp() {
  try {
    render(
      (
        <App />
      ),
      document.getElementById('root')
    );
  } catch (err) {
    alert('Sorry, we are running a problem while loading the App');

    throw err;
  }
}

initializeApp();