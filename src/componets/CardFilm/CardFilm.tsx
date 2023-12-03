import React from 'react';
import { Link } from 'react-router-dom'
import { IFilms } from '../../types/types';
import './CardFilm.css'

const CardFilm: React.FC<IFilms> = ({ kinopoiskId, nameOriginal, nameRu, posterUrlPreview, filmId }) => {
    return (
        <div className='container-card'>
            <div className='card-film'>
                <Link to={'/detail/' + (kinopoiskId || filmId)}>
                    <img src={posterUrlPreview} alt={nameOriginal} />
                    <h2>{nameOriginal || nameRu}</h2>
                </Link>
            </div>
        </div>
    );
};

export default CardFilm;