import logo from "../logo.svg";
import React, {Component} from "react";
import FormControls from './FormControls';
import { Button } from 'carbon-components-react';
import '../app.scss';
import './FilmCard.scss'

class FilmCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {film} = this.props;
        const descFilm = this.state.isOpen && film.text;
        return (
            <article className="film-card">
                <h3 className="film-card__title">{film.title}</h3>
                <p className="film-card__rating">8.3</p>
                <p className="film-card__info">
                    <span className="film-card__year">1929</span>
                    <span className="film-card__duration">1h 55m</span>
                    <span className="film-card__genre">Musical</span>
                </p>
                <img className="film-card__poster" width={100} height={150} src={logo} alt={'asdasd'}/>
                <p className="film-card__description">{descFilm}</p>
                <FormControls/>
                <Button className="red" onClick={this.myClick}>{this.state.isOpen ? 'Закрыть описание' : 'Открыть описание'}</Button>
            </article>
        )
    }

    myClick = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default FilmCard;
