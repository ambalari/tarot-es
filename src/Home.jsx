import { useEffect, useState } from 'react';
import Card from './Card';
import { getTaroCardsData } from './api';
import './Home.css';

function Home() {
  const [cartos, setCartos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTaroCardsData();
      setCartos(data || []);
    }
    fetchData();
  }, []);




  return (
    <div>
      <h1 className="title">Explore the Magic of Tarot Cards</h1>
      <div className="cards-list">
        {cartos?.map((carto) => {
          return <Card key={carto.id} data={carto} />
        })}
      </div >
    </div>
  );
}

export default Home;