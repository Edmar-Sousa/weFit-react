export interface MovieDataType {
    id: number
    title: string
    price: number
    image: string
}

export interface CartItem {
    movie: MovieDataType
    quantity: number
}
