import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo"src={Logo} alt="FerriFlix logo"/>
            </a>

            <Button as="a"className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;