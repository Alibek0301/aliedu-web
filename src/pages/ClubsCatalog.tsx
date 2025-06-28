import { useEffect, useState } from 'react';
import { ClubCard } from '../components/ClubCard';

type Club = {
  id: number;
  name: string;
  city: string;
  address: string;
  direction: string;
  age: string;
  price: string;
  image: string;
  desc: string;
};

export default function ClubsCatalog() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [city, setCity] = useState('');
  const [direction, setDirection] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetch('/api/clubs')
      .then(r => r.json())
      .then(data => setClubs(data))
      .catch(() => setClubs([]));
  }, []);
  return (
    <div style={{
      maxWidth: 1100,
      margin: '46px auto 0 auto',
      padding: '0 8px 40px 8px',
      fontFamily: 'Nunito, Arial, sans-serif'
    }}>
      <h2 style={{
        fontSize: 34,
        fontWeight: 900,
        color: '#4AA7F5',
        marginBottom: 28,
        letterSpacing: 1,
        textAlign: 'center'
      }}>
        Каталог кружков и секций
      </h2>

      <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 34,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <input
          placeholder="Город"
          value={city}
          onChange={e => setCity(e.target.value)}
          style={filterStyle}
        />
        <input
          placeholder="Направление"
          value={direction}
          onChange={e => setDirection(e.target.value)}
          style={filterStyle}
        />
        <input
          placeholder="Возраст"
          value={age}
          onChange={e => setAge(e.target.value)}
          style={filterStyle}
        />
      </div>

      <div style={{
        display: 'grid',
        gap: 32,
        gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))'
      }}>
        {clubs
          .filter(c => (!city || c.city.toLowerCase().includes(city.toLowerCase())) &&
            (!direction || c.direction.toLowerCase().includes(direction.toLowerCase())) &&
            (!age || c.age.includes(age)))
          .map(club => (
            <ClubCard key={club.id} club={{
              id: club.id,
              title: club.name,
              city: club.city,
              age: club.age,
              direction: club.direction,
              price: club.price,
              image: club.image,
              rating: 5
            }} />
        ))}
      </div>
    </div>
  );
}

const filterStyle = {
  fontSize: 16,
  borderRadius: 9,
  padding: '8px 22px',
  border: '1.7px solid #E3A00C',
  color: '#333',
  background: '#FFF8EC',
  fontWeight: 700,
  outline: 'none' as const
};
