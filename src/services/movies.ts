import axios from 'axios'

import { MovieDataType } from '@/interfaces/movies-data'

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 2000,
})

export async function fetchMovies(): Promise<MovieDataType[]> {
    const response = await httpRequest.get('/movies')

    return response.data?.products
}
