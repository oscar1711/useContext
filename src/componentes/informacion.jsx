import React from "react";
import USerUser from "../Hooks/UserUser";
import UserUser from "../Hooks/UserUser";

export default function Information () {

    const{nombres ,edad, correo,genero} =UserUser();

    return (
        <div>
            <h1> Informacion de Usuario</h1>
            <p>Nombres: {nombres}</p>
            <p>Edad: {edad}</p>
            <p>Correo: {correo}</p>
            <p>Genero: {genero}</p>
        </div>
    )
}
