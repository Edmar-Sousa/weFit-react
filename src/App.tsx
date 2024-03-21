import Header from '@/components/Header'
import { MainContent } from './styles'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Success from './routes/Success'
import MovieList from './routes/MoviesCatalog'
import Cart from './routes/Cart'

function App() {
    return (
        <BrowserRouter>
            <Header></Header>

            <MainContent>
                <Routes>
                    <Route path="/" element={<MovieList />}></Route>
                    <Route path="/carrinho" element={<Cart />}></Route>
                    <Route path="/sucesso" element={<Success />}></Route>
                </Routes>
            </MainContent>
        </BrowserRouter>
    )
}

export default App
