import { Container } from "./style.js"

import Header from "../../components/Header.js";
import Logo from "../../components/Logo.js";

import Trophy from '../../assets/Vector.png';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Ranking () {
    const [users, setUsers] = useState([])

    useEffect(()=> {
        const promise = axios.get('https://project-back-shortly.herokuapp.com/ranking');
        promise.then((res) => setUsers(res.data))
    }, [])
    
    return (
        <>
            <Header />
            <Container>
                <Logo />
                <div className="ranking">
                    <img src={Trophy} width='56' alt="trophy" />
                    <h1>Ranking</h1>
                </div>
                <div className="classification">
                    <h1>1. Fulaninha - 32 links - 1.703.584 visualizações</h1>
                    <h1>1. Fulaninhaaaaa - 32 links - 1.703.584 visualizações</h1>
                </div>
                <h2>Crie sua conta para usar nosso serviço!</h2>
            </Container>
        </>
    
    )
}