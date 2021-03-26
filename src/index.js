import React from 'react';
import ReactDOM from "react-dom";
import {films} from './mocs/film';
import FilmList from './components/FilmList';



ReactDOM.render(<FilmList films = {films}></FilmList>, document.querySelector('#root'));