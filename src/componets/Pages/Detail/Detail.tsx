import React from 'react';
import './Detail.css'

import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchDetailFilms } from '../../../store/FilmSlice/FilmSlice';
import SimilarFilms from '../SimilarFilms/SimilarFilms';

const Detail = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const { detail } = useAppSelector(state => state.films)
    React.useEffect(() => {
        if (id) {
            dispatch(fetchDetailFilms(id))
        }
    }, [])
    console.log(detail);

    return (
        <div className='container'>
            <h1>{detail?.nameOriginal || detail?.nameRu}</h1>
            <div className='detail-img'>
                <img src={detail?.posterUrlPreview} alt={detail?.nameOriginal} />
            </div>
            <div className='detail-info'>
                <p> Описание: {detail?.description}</p>
                <p>Год выпуска: {detail?.year}</p>
                <p> Рейтинг: {detail?.ratingKinopoisk}</p>
            </div>
            <div className='similarfilms-card'>
                <div className='similar-flex'>
                    <SimilarFilms />
                </div>
            </div>
        </div>
    );
};

export default Detail;