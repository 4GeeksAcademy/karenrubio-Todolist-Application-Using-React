//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));


//CREAR TARJETA QUE CONTIENE TODAS LAS TAREAS
// DARLE ESTILO A LA APP
// CREAR ACCION QUE CUANDO PASO POR ENCIMA DE UNA TAREA MUESTRE LA X
//CUANDO DOY CLICK A X ELIMINAR TAREA
//MOSTRAR TORTAL DE TAREAS
//IDENTIFICAR CUANDO DOY CLICK SOBRE LA ENTRADA 
// CUANDO DOY CLICK AGRAGAR LA TAREA
//COMO AGREGAR UN ELEMENTO A UNA LISTA(CON MEMORIA)
//VISUALIZAR LISTA DE TAREAS
//APENAS SE AGREGUE UNA TAREA MOSTRARLA EN LA LISTA Y DEJAR EN BLANCO LA ENTRADA