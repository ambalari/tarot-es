import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ data }) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const imageSrc = open ? data.arcaneImage.imageSrc : "https://opengameart.org/sites/default/files/card%20back%20red.png"; {/* замість посилання додай свою картинку картки */ }
  const imageAlt = open ? data.arcaneImage.author : "Card back";

  const showArcaneImage = () => {
    setOpen((prevState) => !prevState);
  }

  const moveToDetailedInfo = () => {
    navigate(`/cartas/${data.id}`)
  }

  return (
    <div key={data.id} onClick={showArcaneImage} className="card-container" >
      <img className="card-image" src={imageSrc} alt={imageAlt} />
      {open && (
        <button className="card-button" onClick={moveToDetailedInfo}>Read Info</button>
      )}
    </div>
  );
}

export default Card;