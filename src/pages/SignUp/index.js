import { Container } from "./style.js";

import HeaderDisconnected from "../../components/HeaderDisconnected.js";
import Logo from '../../components/Logo.js'
export default function SignUp() {
    return (
        <>
            <HeaderDisconnected />
            <Container>
                <Logo />
            </Container>
        </>
    )
}