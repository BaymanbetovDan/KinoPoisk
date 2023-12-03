import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useParams } from 'react-router-dom';
import { fetchSimilarFilms } from '../../../store/FilmSlice/FilmSlice';
import CardSimilar from '../../CardFilm/CardSimilar';
import './SimilarFilms.css'

const SimilarFilms: React.FC = () => {
    const dispatch = useAppDispatch()
    const { similar } = useAppSelector(state => state.films)
    const { id } = useParams()
    React.useEffect(() => {
        if (id) {
            dispatch(fetchSimilarFilms(id))
        }
    }, [])
    return (
        <div className='similar-container'>
            <div className='similar-container-flex'>
                {
                    similar?.map((el) => (
                        <CardSimilar key={el.filmId} {...el} />
                    ))
                }
            </div>
        </div>
    );
};

export default SimilarFilms;