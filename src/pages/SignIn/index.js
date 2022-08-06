import HeaderDisconnected from "../../components/HeaderDisconnected.js"
import Logo from "../../components/Logo.js"
import { Container } from "../SignUp/style.js"

import { useState } from "react"
export default function SignIn() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    return (
        <>
        <HeaderDisconnected />
        <Container>
            <Logo />
            <form>
                <input type="email" placeholder="E-mail" name="email" value={user.email} />
                <input type="password" placeholder="Senha" name="senha" value={user.password}/>
            </form>
        </Container>
        </>
    )
}