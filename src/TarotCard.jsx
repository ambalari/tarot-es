import React from "react";
import { useEffect } from "react";

export default function TarotCard({ data }) {
  return (
    <div className="card">
      <img
        src={data.goddessImage.imageSrc || "/card-back.svg"}
        alt={data.goddessImage.author}
        className="card-img"
      />
      <h2>{data.goddessName}</h2>
    </div>
  );
}
