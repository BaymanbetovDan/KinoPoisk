import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { filmAPI } from '../../API'
import { IDetail, IFilms, ISimilarFilms } from '../../types/types'


interface IState {
    loading: 'idle' | 'loading' | 'finished' | 'rejected',
    error: null | string,
    films: IFilms[],
    detail?: IDetail,
    similar?: ISimilarFilms[],
}

const initialState: IState = {
    loading: 'idle',
    error: null,
    films: [],
}

export const fetchAllFilms = createAsyncThunk(
    'films/fetchAllFilms',
    async (_, { rejectWithValue }) => {

        try {
            const res = await filmAPI.getAllFilms()
            if (String(res.status)[0] !== '2') {
                throw new Error('error')
            }
            return res.data.items
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchDetailFilms = createAsyncThunk(
    'films/fetchDetailFilms',
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await filmAPI.getDetailFilms(id)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchSimilarFilms = createAsyncThunk(
    'films/fetchSimilarFilms',
    async(id: string,{rejectWithValue}) =>{
        try {
            const res = await filmAPI.getSimilarFilms(id)
            return res.data.items
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const fetchByNameFilm = createAsyncThunk(
    'films/fetchByNameFilm',
    async(name: string,{rejectWithValue})=>{
        try {
            const res = await filmAPI.getByNameFilm(name)
            return res.data.films
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const FilmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFilms.pending, (state) => {
                state.loading = 'loading'
                state.error = null
            })
            .addCase(fetchAllFilms.fulfilled, (state, action: PayloadAction<IFilms[]>) => {
                state.loading = 'finished'
                state.error = null
                state.films = action.payload
            })
            .addCase(fetchAllFilms.rejected, (state) => {
                state.loading = 'rejected'
                state.error = 'error'
            })
            .addCase(fetchDetailFilms.fulfilled, (state, action) => {
                state.loading = 'finished'
                state.error = null
                state['detail'] = action.payload
            })
            .addCase(fetchSimilarFilms.fulfilled,(state,action : PayloadAction <ISimilarFilms[]>)=>{
                state.loading = 'finished'
                state.error = 'error'
                state['similar'] = action.payload
            })
            .addCase(fetchByNameFilm.fulfilled,(state,action: PayloadAction<IFilms[]>)=>{
                state.films = action.payload
            })
    }
})

export default FilmSlice.reducer