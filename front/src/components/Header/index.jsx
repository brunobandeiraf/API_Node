import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout} from './styles'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/brunobandeiraf.png"
                    alt="Foto de usuário"
                />
                <div>
                    <span>Bem-vindo!</span>
                    <strong>Bruno Bandeira</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}