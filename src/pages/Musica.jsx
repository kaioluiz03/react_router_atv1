import React from "react";
import { ConteudoMusica } from "../components/ConteudoMusica";
import '../styles/Musica.css';

export const Musica = ()=> {
    
    return(
        <section className='container-musica'>
            <ConteudoMusica />
        </section>
    );
}