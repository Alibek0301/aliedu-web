const mockProfile = {
  name: 'Айжан',
  age: 9,
  photoUrl: 'https://randomuser.me/api/portraits/med/women/43.jpg',
  interests: ['Робототехника', 'Рисование', 'Футбол'],
  achievements: [
    { title: '1 место на олимпиаде по робототехнике', year: 2024 },
    { title: 'Грамота за активное участие', year: 2023 },
  ],
  documents: [
    { title: 'Медицинская справка', file: 'med-spravka.pdf' },
    { title: 'Договор', file: 'dogovor.pdf' },
  ],
};

export default function ChildProfile() {
  return (
    <div style={{
      maxWidth: 700,
      margin: '48px auto',
      background: '#F7FCFF',
      borderRadius: 28,
      boxShadow: '0 4px 28px #4aa7f513',
      padding: 36,
      fontFamily: 'Nunito, Arial, sans-serif',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 24,
        gap: 24
      }}>
        <img
          src={mockProfile.photoUrl}
          alt={mockProfile.name}
          style={{
            width: 92,
            height: 92,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #4AA7F5',
            background: '#fff',
            boxShadow: '0 2px 8px #4aa7f520'
          }}
        />
        <div>
          <div style={{ fontSize: 28, fontWeight: 900, color: '#4AA7F5', marginBottom: 4 }}>
            {mockProfile.name}
          </div>
          <div style={{ color: '#555', fontWeight: 700, fontSize: 18 }}>
            {mockProfile.age} лет
          </div>
          <div style={{ color: '#A7E04B', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
            Интересы: <span style={{ color: '#222' }}>{mockProfile.interests.join(', ')}</span>
          </div>
        </div>
      </div>
      <div style={{
        marginBottom: 30,
        marginTop: 20,
        background: 'linear-gradient(90deg, #E5FFDA 0%, #F0FBFF 100%)',
        borderRadius: 18,
        padding: 22,
        boxShadow: '0 2px 10px #A7E04B15'
      }}>
        <div style={{
          fontWeight: 800,
          color: '#61B41B',
          fontSize: 20,
          marginBottom: 12,
          letterSpacing: 1
        }}>🏅 Достижения</div>
        <div style={{
          display: 'flex',
          gap: 20,
          flexWrap: 'wrap'
        }}>
          {mockProfile.achievements.map((ach, idx) => (
            <div key={idx} style={{
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 2px 8px #4AA7F515',
              padding: '12px 22px',
              fontWeight: 700,
              color: '#34480A',
              minWidth: 190
            }}>
              <span style={{ color: '#A7E04B', fontWeight: 900 }}>{ach.year}</span><br />
              {ach.title}
            </div>
          ))}
        </div>
      </div>
      <div style={{
        background: 'linear-gradient(90deg, #FFF8EC 0%, #F7FCFF 100%)',
        borderRadius: 18,
        padding: 22,
        boxShadow: '0 2px 10px #e7b26713'
      }}>
        <div style={{
          fontWeight: 800,
          color: '#E3A00C',
          fontSize: 20,
          marginBottom: 12,
          letterSpacing: 1
        }}>📄 Документы</div>
        <ul style={{
          paddingLeft: 18,
          fontWeight: 700,
          fontSize: 16
        }}>
          {mockProfile.documents.map((doc, idx) => (
            <li key={idx} style={{ marginBottom: 8 }}>
              <a
                href={`#${doc.file}`}
                style={{
                  color: '#4AA7F5',
                  textDecoration: 'underline',
                  fontWeight: 800
                }}
              >
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
