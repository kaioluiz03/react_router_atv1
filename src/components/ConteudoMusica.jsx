import React from "react";

export const ConteudoMusica = () => {

    return(
        <>
            <div className='title-musica'>
                <h1>Minha Música Favorita!</h1>
            </div>
            <div className='info-musica'>
                <h3>Música: DISCIPLE</h3>
                <h3>Banda: The Warning</h3>
                <h3>Álbum: DISCIPLE</h3>
                <h3><a href="https://www.youtube.com/watch?v=p9GcS8ptpCY" rel='noreferrer' target='_blank'>Escute a Música Clicando Aqui!</a></h3>
            </div>
            <div className='video-musica'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p9GcS8ptpCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
}