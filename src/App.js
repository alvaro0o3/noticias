import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';



function App() {

  //Definir categoría y noticias
  const [categoria, setCategoria] = useState('');

  const [noticias, setNoticias] = useState([]);


  useEffect(() =>{
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=b8b43c1e39d34514866e748a4442d8d4`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setNoticias(resultado.articles)
    }

    consultarAPI();

  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo="Buscador de noticias"
      />

      <div className="container ">
        <Formulario 
          setCategoria={setCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
