import { Container } from "./style.js"

import Header from "../../components/Header.js";
import Logo from "../../components/Logo.js";

import Trophy from '../../assets/Vector.png';
import { useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext.js";
import { useContext } from "react";

export default function Ranking () {
    const {user} = useContext(UserContext)
    const [usersRanking, setUsersRanking] = useState([])

    useEffect(()=> {
        const promise = axios.get('https://project-back-shortly.herokuapp.com/ranking');
        promise.then((res) => setUsersRanking(res.data))
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
                    {usersRanking.map((user, index)=> <h1>{index + 1}. {user.name} - {user.linksCount} links - {user.visitCount} visualizações</h1>)}
                </div>
                {user.token ? <></> :
                <h2>Crie sua conta para usar nosso serviço!</h2>
                }
                </Container>
        </>
    
    )
}