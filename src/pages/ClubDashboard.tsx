import { useEffect, useState } from 'react';

type Dashboard = {
  club: {
    name: string;
    city: string;
    phone: string;
    email: string;
    address: string;
    directions: string[];
    studentsCount: number;
    teachers: string[];
    photoUrl: string;
  };
  schedule: { id: number; name: string; days: string; time: string }[];
};

export default function ClubDashboard() {
  const [data, setData] = useState<Dashboard | null>(null);

  useEffect(() => {
    fetch('/api/club/dashboard')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  return (
    <div style={{
      maxWidth: 860,
      margin: '48px auto',
      background: '#F7FCFF',
      borderRadius: 28,
      boxShadow: '0 4px 28px #4aa7f513',
      padding: 36,
      fontFamily: 'Nunito, Arial, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 18 }}>
        <img
          src={data?.club.photoUrl}
          alt={data?.club.name}
          style={{
            width: 94,
            height: 94,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #4AA7F5',
            background: '#fff',
            boxShadow: '0 2px 8px #4aa7f520'
          }}
        />
        <div>
          <div style={{
            fontSize: 28,
            fontWeight: 900,
            color: '#4AA7F5',
            marginBottom: 5
          }}>{data?.club.name}</div>
          <div style={{
            color: '#A7E04B',
            fontWeight: 800,
            fontSize: 16,
            marginBottom: 1
          }}>{data?.club.city}, {data?.club.address}</div>
          <div style={{
            color: '#333',
            fontWeight: 700,
            fontSize: 15,
            marginBottom: 3
          }}>Тел: <span style={{ color: '#4AA7F5' }}>{data?.club.phone}</span></div>
          <div style={{
            color: '#888',
            fontSize: 15,
            marginBottom: 3
          }}>{data?.club.email}</div>
          <div style={{
            color: '#A7E04B',
            fontWeight: 800,
            fontSize: 16
          }}>
            Направления: <span style={{ color: '#222' }}>{data?.club.directions.join(', ')}</span>
          </div>
          <div style={{
            color: '#4AA7F5',
            fontWeight: 800,
            marginTop: 7,
            fontSize: 16
          }}>
            Учеников: {data?.club.studentsCount}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 28,
        marginBottom: 24,
        background: 'linear-gradient(90deg,#E5FFDA 0%,#F0FBFF 100%)',
        borderRadius: 18,
        padding: 24,
        boxShadow: '0 2px 10px #A7E04B15'
      }}>
        <div style={{
          fontWeight: 800,
          color: '#61B41B',
          fontSize: 20,
          marginBottom: 14
        }}>👩‍🏫 Педагоги</div>
        <ul style={{ paddingLeft: 18, fontSize: 16, fontWeight: 700, color: '#34480A' }}>
          {data?.club.teachers.map(t => (
            <li key={t} style={{ marginBottom: 6 }}>{t}</li>
          ))}
        </ul>
      </div>

      <div style={{
        background: 'linear-gradient(90deg,#FFF8EC 0%,#F7FCFF 100%)',
        borderRadius: 18,
        padding: 24,
        boxShadow: '0 2px 10px #e7b26713'
      }}>
        <div style={{
          fontWeight: 800,
          color: '#E3A00C',
          fontSize: 20,
          marginBottom: 14
        }}>🗓️ Расписание кружков</div>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          background: '#fff',
          borderRadius: 10,
          fontSize: 16,
          fontWeight: 600,
          color: '#333'
        }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '2px solid #EEE', padding: 9 }}>Кружок</th>
              <th style={{ textAlign: 'left', borderBottom: '2px solid #EEE', padding: 9 }}>Дни</th>
              <th style={{ textAlign: 'left', borderBottom: '2px solid #EEE', padding: 9 }}>Время</th>
            </tr>
          </thead>
          <tbody>
            {data?.schedule?.map(row => (
              <tr key={row.id} style={{ background: row.id % 2 === 0 ? '#F7FCFF' : '#fff' }}>
                <td style={{ padding: 9 }}>{row.name}</td>
                <td style={{ padding: 9 }}>{row.days}</td>
                <td style={{ padding: 9 }}>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
