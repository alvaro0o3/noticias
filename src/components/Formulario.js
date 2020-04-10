import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const BotonEnviar = styled.input`
    margin-top: 2rem!important;
    width: 60%;
    margin-left: 20%;
    background-color: #0277bd!important;

    @media (max-width: 992px) {
        width: 100%;
        margin-left: 0;
    }
`;

const Formulario = ({setCategoria}) => {

    const CATEGORIAS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' }
      ];

    // utilizo el custom hook
    const [categoria, SelectCategorias] = useSelect('general', CATEGORIAS);
    
    // Al darle submit al form, pasar la categoría a app.js
    const handleSubmit = e => {
        e.preventDefault();
        setCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <div className="input-field col s12">

                        <SelectCategorias />

                        <BotonEnviar 
                            type="submit"
                            className={`btn-large darken-2 `}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
 
export default Formulario;