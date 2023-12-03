import React from 'react';
import { Link } from 'react-router-dom';
import { ISimilarFilms } from '../../types/types';
import './CardSimilar.css'

const CardSimilar: React.FC<ISimilarFilms> = ({ filmId, nameOriginal, nameRu, posterUrlPreview }) => {
    return (
        <div className='cardsimilar-container'>
            <div className='cardsimilar'>
                <Link to={'/detail/' + filmId}>
                    <h1>{nameOriginal || nameRu}</h1>
                    <img src={posterUrlPreview} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default CardSimilar;