import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap:25px;

    align-items: center;
    height:100vh;

    .ranking {
        display: flex;
        align-items:center;
        h1 {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 45px;
            color: #000000;
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

export {Container}