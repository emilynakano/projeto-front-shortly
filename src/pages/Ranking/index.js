import { Container, Header } from "./style.js"

import Logo from '../../assets/Logo.png';
import Trophy from '../../assets/Vector.png';

import { useNavigate } from "react-router-dom";

export default function Ranking () {
    const navigate = useNavigate();
    return (
        <>
            <Header>
                <div>
                    <h1>Entrar</h1>
                    <h1 onClick={()=> navigate('/sign-up')}>Cadastrar-se</h1>
                </div>
            </Header>
            <Container>
                <div className="logo">
                    <h1>Shortly</h1>
                    <img src={Logo} width='102' alt="logo" />
                </div>
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