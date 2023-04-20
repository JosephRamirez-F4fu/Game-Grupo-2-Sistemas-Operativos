import myLogo from '../../public/img/logo.jpg';	
import ButtonNavbar from './ButtonNavbar';
import { Link } from 'react-router-dom';

export default function NavbarNotLogin(){
    return(
        <nav className="navbar">
           
            <ul className="navbar-nav">
                
                <li className="nav-logo">
                    <Link to="/" className="nav-link">
                        <img src={myLogo} />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/store">Tienda</Link>
                </li>

                <li>
                    <ButtonNavbar content={"Login"} />
                </li>
                <li>
                    <ButtonNavbar content={"Registrarse"} />
                </li>

            </ul>

        </nav>
    )
}