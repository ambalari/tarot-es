import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaroCardsData } from "./api";
import './CardDetail.css';

function CardDetail() {
  const [card, setCard] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getTaroCardsData();
      const cardData = data.find((item) => item.id === id);
      if (cardData) {
        setCard(cardData);
      }
    }
    fetchData();
  }, [id]);

  if (!card) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card-detail-container">
      <button
        onClick={() => navigate("/")}
        className="button"
      >
        ← Back to Home
      </button>

      <h1>{card.arcaneNumber} – {card.arcaneName}</h1>
      <img
        src={card.arcaneImage.imageSrc}
        alt={card.arcaneName}
        className="image"
      />
      <p><strong>Description:</strong> {card.arcaneDescription}</p>
      <p className="text-secondary">
        <em>Image by {card.arcaneImage.author} ({card.arcaneImage.license})</em>
      </p>

      <h2>Goddess: {card.goddessName}</h2>
      <img
        src={card.goddessImage.imageSrc}
        alt={card.goddessName}
        className="image"
      />
      <p>{card.goddessDescription}</p>
      <p className="text-secondary">
        <em>
          Photo by {card.goddessImage.author}, licensed under{" "}
          <a
            href={card.goddessImage.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-SA 4.0
          </a>
        </em>
      </p>
    </div>
  );
}

export default CardDetail;