import Logo from "../../components/Logo.js"
import Header from "../../components/Header.js"
import { Container } from "./style.js"

import { useState, useContext } from "react"
import UserContext from "../../contexts/UserContext.js"
import axios from "axios"
export default function Home () {
    const {user, setUser}= useContext(UserContext)
    const [url, setUrl] = useState();
    async function CreateLink() {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        try {
            const res = await axios.post('https://project-back-shortly.herokuapp.com/urls/shorten', {url}, config)
            console.log(res.data)
        } catch {
            alert("preencha os dados corretamente")
        }
    }
    return (
        <>
            <Header />
            <Container>
                <Logo />
                <div className="CreateLink">
                    <input type="url" name="url" value={url} onChange={(e)=> setUrl(e.target.value)} placeholder="Links que cabem no bolso" />
                    <button onClick={CreateLink}>
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