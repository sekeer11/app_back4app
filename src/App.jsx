import React from 'react';
import styled from 'styled-components';
import Formulario from './components/Formulario';
import ListaContactos from './components/ListaContactos';
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID;
const PARSE_HOST_URL = process.env.REACT_APP_PARSE_HOST_URL;
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const App = () => {
  return (
    <Contenedor>
      <Titulo>Lista de contactos</Titulo>
      <Formulario />
      <ListaContactos />
    </Contenedor>
  );
};

const Contenedor = styled.div`
  margin: 40px;
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
`;

const Titulo = styled.h2`
  margin-bottom: 10px;
`;
export default App;
