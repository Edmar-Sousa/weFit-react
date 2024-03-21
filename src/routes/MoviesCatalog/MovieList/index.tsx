import { useCallback } from 'react'

import { MovieDataType } from '@/interfaces/movies-data'
import { useMoviesStore } from '@/store/moviesStore'
import { formatCurrency } from '@/utils/formater'

import ButtonComponent from '@/components/Button'

import {
    MovieListItem,
    MoviePrice,
    MovieTitle,
    MoviesListContainer,
} from './styles'

import ShoppingCartIcon from '@/icons/shoppingcart.svg'
import Image from '@/components/Image'

function MovieList() {
    const movies = useMoviesStore((state) => state.movies)

    const addToCart = useMoviesStore((state) => state.addToCart)
    const getCartItem = useMoviesStore((state) => state.getCartItem)
    const cart = useMoviesStore((state) => state.cart)

    const handlerAddMovieInCart = useCallback((movie: MovieDataType) => {
        addToCart(movie)
    }, [])

    return (
        <MoviesListContainer>
            {movies.map((movie) => (
                <MovieListItem key={movie.id}>
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        width="147px"
                    ></Image>

                    <MovieTitle>{movie.title}</MovieTitle>
                    <MoviePrice>{formatCurrency(movie.price)}</MoviePrice>

                    <ButtonComponent.Root
                        onClick={() => handlerAddMovieInCart(movie)}
                        $green={!!getCartItem(movie.id)}
                        $transform="uppercase"
                    >
                        <ButtonComponent.LeftGroup>
                            <img
                                src={ShoppingCartIcon}
                                alt="Icone de um carrinho de compras"
                            />
                            <p>
                                {cart.length &&
                                    (getCartItem(movie.id)?.quantity ?? 0)}
                            </p>
                        </ButtonComponent.LeftGroup>
                        Adicionar ao carrinho
                    </ButtonComponent.Root>
                </MovieListItem>
            ))}
        </MoviesListContainer>
    )
}

export default MovieList
