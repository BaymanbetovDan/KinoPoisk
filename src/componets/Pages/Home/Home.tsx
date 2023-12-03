import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchAllFilms } from '../../../store/FilmSlice/FilmSlice';
import CardFilm from '../../CardFilm/CardFilm';
import './Home.css'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const { films, loading, error } = useAppSelector(state => state.films)
    React.useEffect(() => {
        dispatch(fetchAllFilms())
    }, [dispatch])
    if (loading === 'loading') {
        return <h1>Loading...</h1>
    }
    if (error === 'error') {
        return <h1>Error!</h1>
    }
    console.log(films);

    return (
        <div className='home-container'>
            <div className='home-flex'>
                {
                    films && films.map((el) => (
                        <CardFilm key={el?.kinopoiskId || el.filmId} {...el} />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;