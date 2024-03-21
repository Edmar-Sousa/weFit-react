import EmptyMessage from '@/components/EmptyMessage'
import Loading from '@/components/Loading'
import Button from '@/components/Button'

import { useMoviesData } from '@/hooks/useMoviesData'
import { useMoviesStore } from '@/store/moviesStore'

import emptyIcon from '@/icons/empty.svg'
import MovieList from './MovieList'
import { LoaddingContainer } from './styles'

function MoviesCatalog() {
    const { data: movies, isLoading, refetch, isSuccess } = useMoviesData()

    if (isLoading)
        return (
            <LoaddingContainer>
                <Loading />
            </LoaddingContainer>
        )

    if (!movies || movies?.length == 0)
        return (
            <EmptyMessage.Root>
                <EmptyMessage.Title text="Parece que não há nada por aqui :("></EmptyMessage.Title>
                <EmptyMessage.Image emptyIcon={emptyIcon}></EmptyMessage.Image>
                <EmptyMessage.Line />
                <Button.Root maxwidth={173} onClick={() => refetch()}>
                    Recarregar página
                </Button.Root>
            </EmptyMessage.Root>
        )

    if (isSuccess) useMoviesStore.setState({ movies })

    return <MovieList />
}

export default MoviesCatalog
