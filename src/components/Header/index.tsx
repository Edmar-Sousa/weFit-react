import { useMoviesStore } from '@/store/moviesStore'

import {
    CartContainer,
    CartItems,
    CartTitle,
    HeaderPage,
    LinkStyled,
} from './styles'

import BagIcon from '@/icons/bag.svg'

function Header() {
    const countCartItems = useMoviesStore((state) => state.getCartItemCount())

    return (
        <HeaderPage>
            <LinkStyled to="/">WeMovies</LinkStyled>

            <CartContainer to="/carrinho">
                <div>
                    <CartTitle>Meu Carrinho</CartTitle>
                    <CartItems>{countCartItems} itens</CartItems>
                </div>

                <img
                    src={BagIcon}
                    alt="Icone de uma sacola de super-mercado"
                ></img>
            </CartContainer>
        </HeaderPage>
    )
}

export default Header
