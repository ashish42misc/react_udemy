import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContxtProvider } from './components/store/auth-context';

ReactDOM.render(<AuthContxtProvider><App /></AuthContxtProvider>, document.getElementById('root'));
