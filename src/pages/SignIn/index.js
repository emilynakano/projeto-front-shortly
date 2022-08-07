import Header from "../../components/Header.js"
import Logo from "../../components/Logo.js"
import { Container } from "../SignUp/style.js"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";

export default function SignIn() {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.post("https://project-back-shortly.herokuapp.com/sign-in", {...userLogin})
            setUser({...user, token: res.data})
            navigate('/')
        } catch {
            alert("Preencha os dados corretamente")
        }
    }
    function ChangeInput(e) {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }
    return (
        <>
        <Header />
        <Container>
            <Logo />
            <form>
                <input 
                    type="email" 
                    placeholder="E-mail" 
                    name="email" 
                    value={userLogin.email} 
                    onChange={ChangeInput}
                />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    name="password" 
                    value={userLogin.password} 
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