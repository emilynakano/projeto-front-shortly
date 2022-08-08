import { Container } from "./style.js";

import Header from "../../components/Header.js";
import Logo from '../../components/Logo.js'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Rings } from  'react-loader-spinner'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    async function HandleSubmit (e) {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('https://project-back-shortly.herokuapp.com/sign-up', {...user})
            navigate('/sign-in')
        } catch {
            alert("Preencha os dados corretamente")
            setLoading(false)
        }
    }
    function ChangeInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <>
            <Header />
            <Container>
                <Logo />
                <form>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        name="name" 
                        value={user.name}
                        onChange={ChangeInput} 
                    />
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
                    <input 
                        type="password" 
                        placeholder="Confirme a senha" 
                        name="confirmPassword" 
                        value={user.confirmPassword} onChange={ChangeInput}
                    />
                    <button onClick={HandleSubmit} type={'submit'}>
                    {loading ? <Rings color="white" height={80} width={75} /> : <span>Entrar</span>}
                    </button>
                </form>
            </Container>
        </>
    )
}