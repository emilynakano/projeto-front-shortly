import styled from "styled-components";
const Container = styled.div `
    display:flex;
    flex-direction: column;
    align-items:center;

    gap:50px;

    width: 100%;
    form {
        display:flex;
        flex-direction: column;
        gap: 10px;
        width: 70%
    }
    input {
        height: 60px;

        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;

        padding:20px;
    }
`;
export {Container}