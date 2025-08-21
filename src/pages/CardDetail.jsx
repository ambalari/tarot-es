import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getCardById } from "../services";


export default function CardDetail() {
const { id } = useParams();
const [carta, setCarta] = useState(null);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState("");


useEffect(() => {
let activo = true;
setCargando(true);
getCardById(id)
.then((data) => {
if (activo) setCarta(data);
})
.catch((e) => setError(e.message || "Error desconocido"))
.finally(() => setCargando(false));
return () => {
activo = false;
};
}, [id]);


// Buscar un posible campo de imagen automáticamente
const imagen = useMemo(() => {
if (!carta || typeof carta !== "object") return null;
const claves = ["image", "img", "imageUrl", "url", "imagen"];
for (const k of claves) {
if (carta[k] && typeof carta[k] === "string") return carta[k];
}
// fallback: primera URL de imagen encontrada en valores string
const vals = Object.values(carta);
const found = vals.find(
(v) => typeof v === "string" && /https?:\/\/.*\.(png|jpe?g|gif|webp)$/i.test(v)
);
return found || null;
}, [carta]);


if (cargando) return <div className="estado">Cargando carta…</div>;
if (error) return <div className="estado error">Error: {error}</div>;
if (!carta) return <div className="estado">No se encontró la carta.</div>;

return (
<main className="container">
<h1>Detalle de la carta #{id}</h1>
<p className="nota">Datos recuperados mediante GET por ID</p>


{imagen && (
<div className="imagen-wrap">
<img src={imagen} alt={`Carta ${id}`} className="detalle-img" />
</div>
)}

<section className="detalle">
{Object.entries(carta).map(([k, v]) => (
<div key={k} className="fila">
<div className="clave">{k}</div>
<div className="valor">
{typeof v === "object" ? <pre>{JSON.stringify(v, null, 2)}</pre> : String(v)}
</div>
</div>
))}
</section>


<div className="acciones">
<Link to="/" className="btn">Volver</Link>
</div>
</main>
);
}