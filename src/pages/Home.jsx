import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../services";
import TarotCard from "../components/TarotCard";

export default function Home() {
const [cartas, setCartas] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState("");
const navigate = useNavigate();

useEffect(() => {
let activo = true;
setCargando(true);
getAllCards()
.then((data) => {
if (activo) setCartas(Array.isArray(data) ? data : []);
})
.catch((e) => setError(e.message || "Error desconocido"))
.finally(() => setCargando(false));
return () => {
activo = false;
};
}, []);

if (cargando) return <div className="estado">Cargando cartas…</div>;
if (error) return <div className="estado error">Error: {error}</div>;

return (
<main className="container">
<h1>Cartas del tarot</h1>
<p className="nota">Nivel 1: visualización básica (todas boca abajo)</p>

<div className="grid">
{cartas.map((carta) => (
<TarotCard
key={carta.id}
title={`Carta #${carta.id}`}
onClick={() => navigate(`/cartas/${carta.id}`)}
/>
))}
</div>
</main>
);
}