import { useEffect, useState } from 'react';

type Dashboard = {
  child: { name: string; age: number; interests: string[]; photoUrl: string };
  records: { id: number; club: string; date: string; status: string }[];
  events: { id: number; date: string; event: string }[];
};

export default function ParentDashboard() {
  const [data, setData] = useState<Dashboard | null>(null);

  useEffect(() => {
    fetch('/api/parent/dashboard')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <div style={{
      maxWidth: 740,
      margin: '48px auto',
      background: '#F7FCFF',
      borderRadius: 28,
      boxShadow: '0 4px 28px #4aa7f513',
      padding: 36,
      fontFamily: 'Nunito, Arial, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 22 }}>
        <img
          src={data?.child.photoUrl}
          alt={data?.child.name}
          style={{
            width: 88,
            height: 88,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #4AA7F5',
            background: '#fff',
            boxShadow: '0 2px 8px #4aa7f520'
          }}
        />
        <div>
          <div style={{
            fontSize: 27,
            fontWeight: 900,
            color: '#4AA7F5',
            marginBottom: 4
          }}>{data?.child.name}</div>
          <div style={{
            color: '#555',
            fontWeight: 700,
            fontSize: 18
          }}>{data?.child.age} лет</div>
          <div style={{
            color: '#A7E04B',
            fontWeight: 800,
            fontSize: 16,
            marginTop: 2
          }}>
            Интересы: <span style={{ color: '#222' }}>{data?.child.interests.join(', ')}</span>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: 30,
        flexWrap: 'wrap',
        marginTop: 30
      }}>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: 'linear-gradient(90deg,#E5FFDA 0%,#F0FBFF 100%)',
          borderRadius: 18,
          boxShadow: '0 2px 10px #A7E04B15',
          padding: 22,
        }}>
          <div style={{
            fontWeight: 800,
            color: '#61B41B',
            fontSize: 19,
            marginBottom: 10,
            letterSpacing: 1
          }}>История записей</div>
          <ul style={{ paddingLeft: 14, fontSize: 15, fontWeight: 600, color: '#34480A' }}>
            {data?.records?.map(rec => (
              <li key={rec.id} style={{ marginBottom: 7 }}>
                <span style={{ color: '#4AA7F5', fontWeight: 800 }}>{rec.club}</span><br />
                <span style={{ color: '#888' }}>{rec.date}</span>{' '}
                <b style={{
                  color: rec.status === 'Посещено' ? '#A7E04B' : '#E3A00C'
                }}>
                  {rec.status}
                </b>
              </li>
            ))}
          </ul>
        </div>
        <div style={{
          flex: 1,
          minWidth: 260,
          background: 'linear-gradient(90deg,#FFF8EC 0%,#F7FCFF 100%)',
          borderRadius: 18,
          boxShadow: '0 2px 10px #e7b26713',
          padding: 22,
        }}>
          <div style={{
            fontWeight: 800,
            color: '#E3A00C',
            fontSize: 19,
            marginBottom: 10,
            letterSpacing: 1
          }}>Ближайшие события</div>
          <ul style={{ paddingLeft: 14, fontSize: 15, fontWeight: 600, color: '#B88D0B' }}>
            {data?.events?.map(ev => (
              <li key={ev.id} style={{ marginBottom: 7 }}>
                <span style={{ color: '#4AA7F5', fontWeight: 800 }}>{ev.date}</span>{' '}
                <span>{ev.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
