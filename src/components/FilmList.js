import React from "react";
import FilmCard from './FilmCard';
import '../app.scss';


function FilmList({films}) {
    const list = films.map(film =>
        <li className="bx--col" key = {film.id}><FilmCard film = {film}/></li>
    );

    return (
        <div className="bx--grid">
            <ul className="bx--row">
                {list}
            </ul>
        </div>
    )
}

export default FilmList;