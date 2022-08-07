import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import UserContext from "../contexts/UserContext.js";
import { useContext } from "react";
export default function Header() {
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext)
    return (
        <>
        {user.token && user.name ? 
            <HeaderToken>
                <h1>Seja bem-vindo(a), {user.name}!</h1>
                <div>
                    <h1>Home</h1>
                    <h1 onClick={()=> navigate('/')}>Ranking</h1>
                    <h1 onClick={()=> {
                        navigate('/');
                        setUser({...user, token: null})
                        } }>
                    Sair</h1>
                </div>
            </HeaderToken>
            
                : 
            <HeaderWithoutToken>
                <div>
                    <h1 onClick={()=> navigate('/sign-in')}>Entrar</h1>
                    <h1 onClick={()=> navigate('/sign-up')}>Cadastrar-se</h1>
                </div>
            </HeaderWithoutToken>
        }
        </>
    )
}
const HeaderToken = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    height: 70px;
    width:75%;

    div {
        display:flex;
        flex-direction:row;
        justify-content: space-between;

        width:140px;
    }
`
const HeaderWithoutToken = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: end;
    margin: 0 auto;

    height: 70px;
    width:75%;
    div {
        display:flex;
        flex-direction:row;
        justify-content: space-between;

        width:120px;
        h1 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
        }
    }
`