import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap:25px;

    align-items: center;
    height:100vh;

    .logo {
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
    }
    .ranking {
        display: flex;
        align-items:center;
        h1 {
            font-weight: 700;
            font-size: 36px;
            line-height: 45px;
        }
    }
    .classification {
        display:flex;
        flex-direction: column;
        gap:10px;

        width: 70%;
        
        padding: 15px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 24px 24px 0px 0px;

    }
    h2 {
        max-width: 70%;
        text-align: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
        word-wrap:wrap
    }

`
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
export {Container, Header}