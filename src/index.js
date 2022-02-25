import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './bs-components/MainPage';


const { render, useState } = wp.element;

render(<MainPage />, document.getElementById(`react-app`));
