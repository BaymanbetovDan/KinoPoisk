import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/',
    headers: {
        'X-API-KEY': 'c141271f-3144-46ee-8129-795dd40bd46b',
        'Content-Type': 'application/json',
    }
})

export const filmAPI = {
    getAllFilms() {
        return instanse.get('api/v2.2/films')
    },
    getDetailFilms(id: string) {
        return instanse.get('api/v2.2/films/' + id)
    },
    getSimilarFilms(id:string) {
        return instanse.get(`/api/v2.2/films/${id}/similars`)
    },
    getByNameFilm(name: string){
        return instanse.get('/api/v2.1/films/search-by-keyword?keyword=' + name)
    }

}