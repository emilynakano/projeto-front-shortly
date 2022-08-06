import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Ranking from './pages/Ranking/index.js';
import SignUp from './pages/SignUp/index.js';

import GlobalStyles from './themes/globalStyles.js';
export default function App () {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Ranking />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}