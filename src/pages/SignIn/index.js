import HeaderDisconnected from "../../components/HeaderDisconnected.js"
import Logo from "../../components/Logo.js"
import { Container } from "../SignUp/style.js"

import { useState } from "react"
export default function SignIn() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    function ChangeInput(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }
    console.log(user)
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
            </form>
        </Container>
        </>
    )
}