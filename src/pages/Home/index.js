import Logo from "../../components/Logo.js"
import Header from "../../components/Header.js"
import { UserLinks } from "./UserLinks.js"
import { Container } from "./style.js"

import { useState, useContext } from "react"
import UserContext from "../../contexts/UserContext.js"
import axios from "axios"

import { Rings } from  'react-loader-spinner'

export default function Home () {
    const [loading, setLoading] = useState(false)
    const [newLink, setNewLInk] = useState('')
    const {user}= useContext(UserContext)
    const [url, setUrl] = useState();
    
    function CreateLink() {
            setLoading(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const promise = axios.post('https://project-back-shortly.herokuapp.com/urls/shorten', {url}, config);
            promise.then((res) => {
                setNewLInk(res.data);
                setUrl('');
                setLoading(false)
            })
            promise.catch(()=> {
                alert("preencha os dados corretamente")
                setLoading(false)
            })

    }

    return (
        <>
            <Header />
            <Container>
                <Logo />
                <div className="CreateLink">
                    <input type="url" name="url" value={url} onChange={(e)=> setUrl(e.target.value)} placeholder="Links que cabem no bolso" />
                    <button onClick={CreateLink}>
                    {loading ? <Rings color="white" height={80} width={75} /> : <span>Criar Link</span>}
                    </button>
                </div>
                <UserLinks newLink={newLink}/>
                
            </Container>
        </>
    )
}
