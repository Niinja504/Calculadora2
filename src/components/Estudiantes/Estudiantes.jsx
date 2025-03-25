// components/Estudiantes/Estudiantes.jsx

import React, { useState } from "react";
import "./Estudiantes.css";

const Estudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [carnet, setCarnet] = useState("");

  const agregarEstudiante = () => {
    if (!nombre || !edad || !carnet) return;
    if (isNaN(edad)) return;

    setEstudiantes([
      ...estudiantes,
      {
        id: Date.now(),
        nombre,
        edad: Number(edad),
        carnet,
      },
    ]);

    setNombre("");
    setEdad("");
    setCarnet("");
  };

  const eliminarEstudiante = (id) => {
    setEstudiantes(estudiantes.filter((estudiante) => estudiante.id !== id));
  };

  return (
    <div className="estudiantes-container">
      <h2>Registro de Estudiantes</h2>
      <div className="form-container">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        />
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          placeholder="Edad"
        />
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
          placeholder="Carnet"
        />
        <button onClick={agregarEstudiante}>Agregar</button>
      </div>

      <div className="listado-container">
        <h3>Listado:</h3>
        <ul className="todo-list">
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              <span>{estudiante.nombre} - {estudiante.edad} años - {estudiante.carnet}</span>
              <button
                className="delete-btn"
                onClick={() => eliminarEstudiante(estudiante.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Estudiantes;
