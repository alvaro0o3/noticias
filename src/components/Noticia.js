import React from 'react';
import noimagen from '../no-image.png';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Card = styled.div`
    min-height: 650px;

    @media (max-width: 992px) {
        min-height: 600px;
    }

    @media (max-width: 767px) {
        min-height: auto;
    }
`;

const Titular = styled.h3`
    font-size: 25px;
    color: #0277bd;
`;

const BtnVerMas = styled.a`
    background-color: #0277bd;
`;


const Noticia = ({ noticia }) => {

    //extraer datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage)
        ? <img src={urlToImage} alt={title} />
        : <img src={noimagen} alt="No disponible" />


    return (
        <div className="col s12 m6 l4">
            <Card className="card">
                <div className="card-image">
                    {imagen}
                    <span className="card-title">{source.name}</span>
                </div>

                <div className="card-content">
                    <Titular>{title}</Titular>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <BtnVerMas
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver más...</BtnVerMas>
                </div>
            </Card>
        </div>
    );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;