import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useMoviesStore } from '@/store/moviesStore'
import { formatCurrency } from '@/utils/formater'

import ChangeQuantity from './ChangeQuantity'

import EmptyMessage from '@/components/EmptyMessage'
import ButtonComponent from '@/components/Button'
import Image from '@/components/Image'

import {
    PageContainer,
    Line,
    Title,
    Price,
    TotalSection,
    TotalContainer,
    ButtonContainer,
    MovieContainer,
    MovieTitle,
    MovieHeader,
    ButtonIcon,
    Group,
    ProductsHeader,
    MoviePrice,
    ShowWhen,
    DesktopTitle,
    MovieInformation,
} from './styles'

import emptyIcon from '@/icons/empty.svg'
import trashIcon from '@/icons/trash.svg'

function Cart() {
    const cart = useMoviesStore((state) => state.cart)
    const getCartTotalPrice = useMoviesStore((state) =>
        state.getCartTotalPrice()
    )
    const updateCartItemQuantity = useMoviesStore(
        (state) => state.updateCartItemQuantity
    )
    const removeFromCart = useMoviesStore((state) => state.removeFromCart)
    const finishPurchase = useMoviesStore((state) => state.finishPurchase)

    const navigate = useNavigate()

    const handleNavigateToBack = useCallback(() => {
        navigate('/')
    }, [])

    const handleFinishPurchase = useCallback(() => {
        navigate('/sucesso')
        finishPurchase()
    }, [])

    const handlerChangeValue = useCallback((movieId: number, value: number) => {
        if (value == 0) {
            removeFromCart(movieId)
        } else {
            updateCartItemQuantity(movieId, value)
        }
    }, [])

    const handlerRemoveMovie = useCallback((movieId: number) => {
        removeFromCart(movieId)
    }, [])

    if (!cart || !cart.length)
        return (
            <EmptyMessage.Root>
                <EmptyMessage.Title text="Parece que não há nada por aqui :("></EmptyMessage.Title>
                <EmptyMessage.Image emptyIcon={emptyIcon}></EmptyMessage.Image>
                <EmptyMessage.Line />
                <ButtonComponent.Root
                    type="button"
                    maxwidth={173}
                    onClick={handleNavigateToBack}
                    aria-label="Botão para voltar para a pagina de catalogo"
                >
                    Voltar
                </ButtonComponent.Root>
            </EmptyMessage.Root>
        )

    return (
        <PageContainer>
            <ProductsHeader>
                <Title>Produto</Title>
                <Title>Qtd</Title>
                <Title>Subtotal</Title>
                <div></div>
            </ProductsHeader>

            {cart.map((cartItem) => (
                <MovieContainer key={cartItem.movie.id}>
                    <Image
                        src={cartItem.movie.image}
                        alt={cartItem.movie.title}
                        width="64px"
                    />

                    <MovieInformation>
                        <MovieHeader>
                            <DesktopTitle>
                                <MovieTitle>{cartItem.movie.title}</MovieTitle>
                                <ShowWhen>
                                    <MovieTitle>
                                        {formatCurrency(cartItem.movie.price)}
                                    </MovieTitle>
                                </ShowWhen>
                            </DesktopTitle>

                            <ShowWhen>
                                <ChangeQuantity
                                    quantity={cartItem.quantity}
                                    onChange={(value) =>
                                        handlerChangeValue(
                                            cartItem.movie.id,
                                            value
                                        )
                                    }
                                />

                                <Price $width="100%">
                                    {formatCurrency(
                                        cartItem.quantity * cartItem.movie.price
                                    )}
                                </Price>
                            </ShowWhen>

                            <MoviePrice>
                                <Price>
                                    {formatCurrency(cartItem.movie.price)}
                                </Price>

                                <ButtonIcon
                                    type="button"
                                    onClick={() =>
                                        handlerRemoveMovie(cartItem.movie.id)
                                    }
                                >
                                    <img
                                        src={trashIcon}
                                        alt="Icone de uma lixeira"
                                    />
                                </ButtonIcon>
                            </MoviePrice>

                            <ShowWhen $width="20px">
                                <ButtonIcon
                                    type="button"
                                    onClick={() =>
                                        handlerRemoveMovie(cartItem.movie.id)
                                    }
                                >
                                    <img
                                        src={trashIcon}
                                        alt="Icone de uma lixeira"
                                    />
                                </ButtonIcon>
                            </ShowWhen>
                        </MovieHeader>

                        <Group>
                            <ChangeQuantity
                                quantity={cartItem.quantity}
                                onChange={(value) =>
                                    handlerChangeValue(cartItem.movie.id, value)
                                }
                            />

                            <div>
                                <Title>Subtotal</Title>
                                <Price>
                                    {formatCurrency(
                                        cartItem.quantity * cartItem.movie.price
                                    )}
                                </Price>
                            </div>
                        </Group>
                    </MovieInformation>
                </MovieContainer>
            ))}

            <Line />

            <TotalContainer>
                <TotalSection>
                    <Title $size={1.4}>Total</Title>
                    <Price $size={2.4}>{getCartTotalPrice}</Price>
                </TotalSection>

                <ButtonContainer>
                    <ButtonComponent.Root
                        type="button"
                        $transform="uppercase"
                        onClick={handleFinishPurchase}
                        aria-label="Botão para finalizar pedido"
                    >
                        Finalizar pedido
                    </ButtonComponent.Root>
                </ButtonContainer>
            </TotalContainer>
        </PageContainer>
    )
}

export default Cart
