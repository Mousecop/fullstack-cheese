import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';

console.log(`Client running in ${process.env.NODE_ENV} mode`);
const cheese = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];
document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<CheeseList cheeses={cheese}/>,
        document.getElementById('root')
    )
);
