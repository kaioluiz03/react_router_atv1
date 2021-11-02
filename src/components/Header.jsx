import React from "react";
import { Link } from 'react-router-dom';

export const Header = ()=>{
    
    return(
        <header className='container-nav'>
            <nav className='nav-bar'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/Musica'>Música</Link>
                <Link className='link' to='/Cidade'>Cidade</Link>
            </nav>
        </header>
    );
}