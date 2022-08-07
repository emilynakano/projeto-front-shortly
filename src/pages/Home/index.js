import Logo from "../../components/Logo.js"
import Header from "../../components/Header.js"
import { Container } from "./style.js"
export default function Home () {
    return (
        <>
            <Header />
            <Container>
                <Logo />
                <div className="CreateLink">
                    <input type="text" placeholder="Links que cabem no bolso" />
                    <button>
                        <span> Criar link</span>
                    </button>
                </div>
                <div className="links">
                    <div className="link">
                        <button>
                            <span>
                                https://www.driven.com.br
                            </span>
                            <span>
                                e4231A
                            </span>
                            <span>
                                Quantidade de visitantes: 271 
                            </span>
                        </button>
                        <button className="trash">
                            <h1>oi</h1>
                        </button>
                    </div>
                    
                </div>
            </Container>
        </>
    )
}