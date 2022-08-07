import Logo from "../../components/Logo.js"
import Header from "../../components/Header.js"
import { UserLinks } from "./UserLinks.js"
import { Container } from "./style.js"

import { useState, useContext, useEffect } from "react"
import UserContext from "../../contexts/UserContext.js"
import axios from "axios"

export default function Home () {
    const [newLink, setNewLInk] = useState('')
    const {user}= useContext(UserContext)
    const [url, setUrl] = useState();
    
    function CreateLink() {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const promise = axios.post('https://project-back-shortly.herokuapp.com/urls/shorten', {url}, config);
            promise.then((res) => setNewLInk(res.data))
            promise.catch(()=> alert("preencha os dados corretamente"))

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
                <UserLinks newLink={newLink}/>
                
            </Container>
        </>
    )
}
