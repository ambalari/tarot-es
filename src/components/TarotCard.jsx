import React from "react";

export default function TarotCard({ title = "Carta del tarot", onClick }) {
return (
<button
onClick={onClick}
className="card"
aria-label={title}
title={title}
>
<img src="/cardcard.svg" alt="Carta boca abajo" className="card-img" />
</button>
);
}