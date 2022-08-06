import { Container } from "./style.js";

import HeaderDisconnected from "../../components/HeaderDisconnected.js";
import Logo from '../../components/Logo.js'

import { useState } from "react";
export default function SignUp() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    async function HandleSubmit (e) {
        e.preventDefault()
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
                        <span>Criar Conta</span>
                    </button>
                </form>
            </Container>
        </>
    )
}