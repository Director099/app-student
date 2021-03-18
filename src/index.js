import React from 'react';
import ReactDOM from "react-dom";
import FilmCard from './components/FilmCard'
import films from './mocs/film'


ReactDOM.render(<FilmCard film={films[0]} foo="bar"></FilmCard>, document.querySelector('#root'));
