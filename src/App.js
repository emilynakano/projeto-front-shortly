import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ranking from './pages/Ranking/index.js';
import GlobalStyles from './themes/globalStyles.js';
export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Ranking />} />
            </Routes>
        </BrowserRouter>
    )
}