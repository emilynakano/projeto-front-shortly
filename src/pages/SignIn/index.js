import Header from "../../components/Header.js"
import Logo from "../../components/Logo.js"
import { Container } from "../SignUp/style.js"

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../contexts/UserContext.js";

import { Rings } from  'react-loader-spinner'


export default function SignIn() {
    const [loading, setLoading] = useState(false)
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })
    async function HandleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post("https://project-back-shortly.herokuapp.com/sign-in", {...userLogin})
            setUser({...user, token: res.data})
            navigate('/home')
        } catch {
           alert("preencha os dados corretamente");
           setLoading(false)
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
                    {loading ? <Rings color="white" height={80} width={75} /> : <span>Entrar</span>}
                </button>
            </form>
        </Container>
        </>
    )
}