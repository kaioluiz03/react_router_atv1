import React from "react";
import MarcoZero from '../assets/marco-zero.jpg'
import CentroVelho from '../assets/rua-do-centro-velho-de-recife-pernambuco.jpeg'


export const ConteudoCidade = ()=> {

    return(
        <>
            <div className='title-cidade'>
                <h1>Minha Cidade Favorita !</h1>
            </div>
            <div className='info-cidade'>
                <h2>Recife</h2>

                <h3><a href="https://escola.britannica.com.br/artigo/Recife/483499" rel='noreferrer' target='_blank'>Saiba mais!</a></h3>
            </div>
            <div className='container-imagens'>
                <img className='imagens' src={MarcoZero} alt="Fotografia do Marco Zero a noite" />
                <img className='imagens' src={CentroVelho} alt="Fotografia da Rua Centro Velho" />
            </div>
        </>
    )
};