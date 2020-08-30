import React from 'react';
import ReactDOM from 'react-dom';
import CounterAPP from './CounterAPP';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterAPP value={10} />, divRoot);
