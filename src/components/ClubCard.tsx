type Club = {
  id: number;
  title: string;
  city: string;
  age: string;
  direction: string;
  price: string;
  image: string;
  rating: number;
};

type ClubCardProps = {
  club: Club;
};

export function ClubCard({ club }: ClubCardProps) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 18,
      boxShadow: '0 2px 12px #0001',
      overflow: 'hidden',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center'
    }}>
      <img
        src={club.image}
        alt={club.title}
        style={{ width: 110, height: 90, objectFit: 'cover', marginRight: 16 }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 18, color: '#4AA7F5', marginBottom: 6 }}>{club.title}</div>
        <div style={{ color: '#555', marginBottom: 4 }}>{club.city} · {club.direction} · {club.age}</div>
        <div style={{ color: '#A7E04B', fontWeight: 700, marginBottom: 4 }}>{club.price}</div>
        <div style={{ fontSize: 13, color: '#888' }}>⭐ {club.rating}</div>
      </div>
    </div>
  );
}
