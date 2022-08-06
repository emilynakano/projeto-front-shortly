import { Container } from "./style.js";

import HeaderDisconnected from "../../components/HeaderDisconnected.js";
import Logo from '../../components/Logo.js'

export default function SignUp() {
    return (
        <>
            <HeaderDisconnected />
            <Container>
                <Logo />
                <form>
                    <input type="text" placeholder="nome" />
                    <input type="text" placeholder="email"  />
                    <input type="password" placeholder="senha" />
                    <input type="password" placeholder="confirme a senha" />
                </form>
            </Container>
        </>
    )
}