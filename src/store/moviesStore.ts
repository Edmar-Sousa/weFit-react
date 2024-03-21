import { create } from 'zustand'

import { MovieDataType, CartItem } from '@/interfaces/movies-data'
import { formatCurrency } from '@/utils/formater'
import { getCartLocalStoraeg, setCartLocalStorage } from '@/utils/storage'

interface MoviesStore {
    movies: MovieDataType[]
    cart: CartItem[]

    setMovies: (movies: MovieDataType[]) => void
    addToCart: (movie: MovieDataType) => void

    getCartItemCount: () => number
    getCartItem: (id: number) => CartItem | undefined

    getCartTotalPrice: () => string
    removeFromCart: (id: number) => void
    updateCartItemQuantity: (movieId: number, quantity: number) => void

    finishPurchase: () => void
}

export const useMoviesStore = create<MoviesStore>((set, get) => ({
    movies: [],
    cart: getCartLocalStoraeg(),

    setMovies: (movies: MovieDataType[]) => set(() => ({ movies })),

    getCartItemCount: () => get().cart.length,

    finishPurchase: () =>
        set((state) => {
            setCartLocalStorage([])

            return {
                ...state,
                cart: [],
            }
        }),

    getCartTotalPrice: () => {
        const total = get().cart.reduce(
            (total, item) => total + item.quantity * item.movie.price,
            0
        )

        return formatCurrency(total)
    },

    getCartItem: (id: number) => get().cart.find((item) => item.movie.id == id),

    updateCartItemQuantity: (movieId: number, quantity: number) =>
        set((state) => {
            const cart = state.cart.map((item) =>
                item.movie.id == movieId ? { ...item, quantity } : item
            )

            setCartLocalStorage(cart)

            return {
                ...state,
                cart,
            }
        }),

    addToCart: (movie: MovieDataType) =>
        set((state) => {
            const movieAlreadyExistsInCart = state.cart.find(
                (cartItem) => cartItem.movie.id == movie.id
            )

            let cart = []

            if (movieAlreadyExistsInCart) {
                cart = state.cart.map((item) =>
                    item.movie.id == movie.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                cart = [...state.cart, { movie, quantity: 1 }]
            }

            setCartLocalStorage(cart)

            return {
                ...state,
                cart,
            }
        }),

    removeFromCart: (id: number) => {
        set((state) => {
            const newCart = state.cart.filter(
                (cartItem) => cartItem.movie.id !== id
            )

            return { cart: newCart }
        })
    },
}))
