import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchByNameFilm } from '../../store/FilmSlice/FilmSlice';
import './Header.css'

const Header: FC = () => {
    const [value, setValue] = useState('')
    const dispatch = useAppDispatch()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (value !== '') {
            try {
                await dispatch(fetchByNameFilm(value));
                setValue('');
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    return (
        <header>
            <form className='form' onSubmit={handleSubmit}>
                <img src="https://static.beeline.ru/upload/dpcupload/contents/291/icons/Kinopoisk-icon.png" width={50} alt="" />
                <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
        </header>
    );
};

export default Header;