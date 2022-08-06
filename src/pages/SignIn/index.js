import HeaderDisconnected from "../../components/HeaderDisconnected.js"
import Logo from "../../components/Logo.js"
import { Container } from "../SignUp/style.js"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignIn() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [data, setData] = useState('')
    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.post("https://project-back-shortly.herokuapp.com/sign-in", {...user})
            console.log(res.data)
            navigate('/')
        } catch {
            alert("Preencha os dados corretamente")
        }
    }
    function ChangeInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <>
        <HeaderDisconnected />
        <Container>
            <Logo />
            <form>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    name="email" 
                    value={user.email} 
                    onChange={ChangeInput}
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    name="password" 
                    value={user.password} 
                    onChange={ChangeInput}
                />
                <button onClick={HandleSubmit} type="submit">
                    <span>Entrar</span>
                </button>
            </form>
        </Container>
        </>
    )
}