import styled from "styled-components";
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;

    .CreateLink {
        margin-top:45px;
        display: flex;
        width:75%;
        display:flex;
        justify-content:space-between;
    }
    input {
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        width: 65%;
        height:60px;
        padding: 20px;
    }
    button {
        border:none;
        background-color: #5D9040;
        border-radius: 12px;
        height:60px;
        width:30%;
    }
    span {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        max-width:30%;
        white-space:nowrap;
        text-overflow: ellipsis;
        overflow:auto;
    }
    .links{
        margin-top: 18px;
        width:75%;
        display:flex;
        flex-direction:column;
        gap: 10px;
    }
    .link {
        display:flex;
        button {
            width:90%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding: 16px;
            border-radius: 12px 0px 0px 12px;
        }
        .trash {
            border: 1px solid rgba(120, 177, 89, 0.25);
            background-color: #FFFFFF;
            width:10%;
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 0px 12px 12px 0px;
        }
    }

`
export {Container}