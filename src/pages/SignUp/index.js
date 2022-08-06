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
    console.log(user)
    function ChangeInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <>
            <HeaderDisconnected />
            <Container>
                <Logo />
                <form>
                    <input type="text" placeholder="nome" name="name" value={user.name} onChange={ChangeInput} />
                    <input type="email" placeholder="email" name="email" value={user.email} onChange={ChangeInput} />
                    <input type="password" placeholder="senha" name="password" value={user.password} onChange={ChangeInput} />
                    <input type="password" placeholder="confirme a senha" name="confirmPassword" value={user.confirmPassword} onChange={ChangeInput}/>
                </form>
            </Container>
        </>
    )
}