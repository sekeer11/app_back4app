import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Parse from 'parse/dist/parse.min.js';
import Contacto from "./Contacto";

const ListaContactos = () => {
  const [contactos, cambiarContactos] = useState([]);

  const readAllContacts = async () => {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Contacto");
    try {
        let todos = await parseQuery.findAll();
        // Be aware that empty or invalid queries return as an empty array
        // Set results to state variable
        cambiarContactos(todos);
        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        console.log(`Error! ${error.message}`);
        return false;
      }
  };
  useEffect(() => {
    readAllContacts();
  }, []);

  return (
    contactos.length > 0 && (
      <ContenedorContactos>
        {contactos.map((contacto) => (
          <Contacto
            key={contacto.id}
            id={contacto.id}
            nombre={contacto.get('nombre')}
            correo={contacto.get('correo')}
          />
        ))}
      </ContenedorContactos>
    )
  );
};

const ContenedorContactos = styled.div`
  margin-top: 40px;
`;

export default ListaContactos;
