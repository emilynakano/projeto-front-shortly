import styled from "styled-components"
import logo from '../assets/logo.png';

export default function Logo() {
    return (
        <Container>
            <h1>Shortly</h1>
            <img src={logo} width='102' alt="logo" />
        </Container>

    )
}
const Container = styled.div`
    display: flex;
    align-items:center;
    h1 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 200;
        font-size: 64px;
        line-height: 80px;
        color: #000000;
    }
`