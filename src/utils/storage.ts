import { CartItem } from '@/interfaces/movies-data'

export function setCartLocalStorage(value: Array<CartItem>) {
    window.localStorage.setItem('cart', JSON.stringify(value))
}

export function getItemLocalStoraeg(): Array<CartItem> {
    const cart = window.localStorage.getItem('cart')

    if (!cart) return []

    return JSON.parse(cart)
}
