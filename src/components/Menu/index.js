import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import {Link} from 'react-router-dom';

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo"src={Logo} alt="FerriFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;