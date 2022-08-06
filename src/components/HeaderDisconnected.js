import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function HeaderDisconnected() {
    const navigate = useNavigate();
    return (
        <Header>
            <div>
                <h1>Entrar</h1>
                <h1 onClick={()=> navigate('/sign-up')}>Cadastrar-se</h1>
            </div>
        </Header>
    )
}
const Header = styled.div`
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