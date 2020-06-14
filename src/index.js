import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const ERROR_COUNT = 3;

ReactDOM.render(
  <App errorCount={ERROR_COUNT} />,
  document.querySelector(`#root`)
);
