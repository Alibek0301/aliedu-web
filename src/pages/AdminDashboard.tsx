import { useEffect, useState } from 'react';

type Dashboard = {
  stats: { clubs: number; parents: number; students: number; pendingClubs: number; reviews: number };
  complaints: { id: number; text: string; status: string }[];
  users: { id: number; name: string; role: string }[];
};

export default function AdminDashboard() {
  const [data, setData] = useState<Dashboard | null>(null);

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);
  return (
    <div style={{
      maxWidth: 960,
      margin: '48px auto',
      background: '#F7FCFF',
      borderRadius: 28,
      boxShadow: '0 4px 28px #4aa7f513',
      padding: 38,
      fontFamily: 'Nunito, Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 34,
        flexWrap: 'wrap'
      }}>
        <div style={statBox('#4AA7F5', '#fff')}>Кружков<br /><b>{data?.stats.clubs}</b></div>
        <div style={statBox('#A7E04B', '#233F11')}>Родителей<br /><b>{data?.stats.parents}</b></div>
        <div style={statBox('#F9D469', '#B88D0B')}>Ученики<br /><b>{data?.stats.students}</b></div>
        <div style={statBox('#FFF6A0', '#E3A00C')}>На модерации<br /><b>{data?.stats.pendingClubs}</b></div>
        <div style={statBox('#E4ECFF', '#4AA7F5')}>Отзывы<br /><b>{data?.stats.reviews}</b></div>
      </div>

      <div style={{
        marginBottom: 32,
        background: 'linear-gradient(90deg, #FFF8EC 0%, #F7FCFF 100%)',
        borderRadius: 18,
        padding: 24,
        boxShadow: '0 2px 10px #e7b26713'
      }}>
        <div style={{
          fontWeight: 800,
          color: '#E3A00C',
          fontSize: 20,
          marginBottom: 10,
          letterSpacing: 1
        }}>🚩 Жалобы и обращения</div>
        <ul style={{ paddingLeft: 16, fontSize: 15, fontWeight: 600 }}>
          {data?.complaints.map(c => (
            <li key={c.id} style={{
              marginBottom: 9,
              color: c.status === 'Новая' ? '#E76431' : '#34480A'
            }}>
              {c.text}{' — '}
              <b style={{ color: c.status === 'Новая' ? '#E76431' : '#A7E04B' }}>{c.status}</b>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        background: 'linear-gradient(90deg,#E5FFDA 0%,#F0FBFF 100%)',
        borderRadius: 18,
        padding: 24,
        boxShadow: '0 2px 10px #A7E04B15'
      }}>
        <div style={{
          fontWeight: 800,
          color: '#61B41B',
          fontSize: 20,
          marginBottom: 12,
          letterSpacing: 1
        }}>👤 Пользователи</div>
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
              <th style={{ textAlign: 'left', borderBottom: '2px solid #EEE', padding: 9 }}>Имя</th>
              <th style={{ textAlign: 'left', borderBottom: '2px solid #EEE', padding: 9 }}>Роль</th>
            </tr>
          </thead>
          <tbody>
            {data?.users.map(u => (
              <tr key={u.id} style={{ background: u.role === 'admin' ? '#E4ECFF' : '#fff' }}>
                <td style={{ padding: 9 }}>{u.name}</td>
                <td style={{
                  padding: 9,
                  color: u.role === 'parent'
                    ? '#4AA7F5'
                    : u.role === 'club'
                    ? '#A7E04B'
                    : '#E76431',
                  fontWeight: 800
                }}>
                  {u.role === 'parent' ? 'Родитель' : u.role === 'club' ? 'Кружок' : 'Админ'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper для красивых цветных “карточек-статистов”
function statBox(bg: string, color: string) {
  return {
    flex: '1 0 140px',
    minWidth: 140,
    background: bg,
    color,
    borderRadius: 16,
    textAlign: 'center' as const,
    fontWeight: 900,
    fontSize: 18,
    padding: '24px 0 16px 0',
    boxShadow: '0 2px 10px #4aa7f515',
    marginBottom: 7,
    lineHeight: 1.3,
  };
}
