
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDom from 'react-dom';
import Desk from './components/Deskmark';
import 'bootstrap/dist/css/bootstrap.css';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDom.render(<Desk/>, app);
