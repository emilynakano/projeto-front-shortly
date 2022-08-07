import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Ranking from './pages/Ranking/index.js';
import SignUp from './pages/SignUp/index.js';
import SignIn from './pages/SignIn/index.js'

import GlobalStyles from './themes/globalStyles.js';
import { useState } from 'react';
import UserContext from './contexts/UserContext.js'
import Home  from './pages/Home/index.js';
export default function App () {
    const [user, setUser] = useState({
        name: '',
        token: ''
    });
    return (
        <BrowserRouter>
            <GlobalStyles />
            <UserContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path='/' element={<Ranking />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}