import { useMoviesStore } from '@/store/moviesStore'

import {
    CartContainer,
    CartItems,
    CartTitle,
    HeaderPage,
    LinkStyled,
    NavigationContainer,
} from './styles'

import BagIcon from '@/icons/bag.svg'

function Header() {
    const countCartItems = useMoviesStore((state) => state.getCartItemCount())

    return (
        <HeaderPage>
            <NavigationContainer>
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
            </NavigationContainer>
        </HeaderPage>
    )
}

export default Header
