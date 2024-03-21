import { useQuery } from '@tanstack/react-query'

import { fetchMovies } from '@/services/movies'

export function useMoviesData() {
    const query = useQuery({
        queryFn: fetchMovies,
        queryKey: ['movies-data'],
    })

    return query
}
