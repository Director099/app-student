import React from "react";

function FormControls() {
    return (
        <form className="film-card__controls">
            <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add
                to watchlist
            </button>
            <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark
                as watched
            </button>
            <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as
                favorite
            </button>
        </form>
    )
}

export default FormControls;
