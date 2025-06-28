const mockClubs = [
  {
    name: 'Робототехника Junior',
    city: 'Астана',
    address: 'ул. Абая, 11',
    direction: 'Техническое',
    age: '7-11',
    price: '20 000 ₸',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80',
    desc: 'Роботы, 3D-принтеры, соревнования и творчество для детей.',
  },
  {
    name: 'Шахматная академия',
    city: 'Астана',
    address: 'пр. Мангилик Ел, 12',
    direction: 'Логика',
    age: '6-14',
    price: '15 000 ₸',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=facearea&w=400&q=80',
    desc: 'Обучение шахматам в группах и индивидуально. Турниры каждую неделю!',
  },
  {
    name: 'Арт-студия "Краски"',
    city: 'Астана',
    address: 'ул. Сарыарка, 7',
    direction: 'Творчество',
    age: '5-12',
    price: '18 000 ₸',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
    desc: 'Живопись, лепка, творчество и развитие эстетического вкуса.',
  }
];

export default function ClubsCatalog() {
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

      {/* Блок фильтрации-заглушки */}
      <div style={{
        display: 'flex',
        gap: 20,
        marginBottom: 34,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <select style={filterStyle}><option>Город: Астана</option></select>
        <select style={filterStyle}><option>Направление: Все</option></select>
        <select style={filterStyle}><option>Возраст: Все</option></select>
      </div>

      <div style={{
        display: 'grid',
        gap: 32,
        gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))'
      }}>
        {mockClubs.map((club, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: 26,
            boxShadow: '0 4px 24px #0001',
            padding: '0 0 24px 0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img
              src={club.image}
              alt={club.name}
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderTopLeftRadius: 26,
                borderTopRightRadius: 26
              }}
            />
            <div style={{ padding: '22px 24px 0 24px', flex: 1 }}>
              <div style={{
                fontSize: 22,
                fontWeight: 900,
                color: '#4AA7F5',
                marginBottom: 4,
                lineHeight: 1.1
              }}>{club.name}</div>
              <div style={{
                color: '#A7E04B',
                fontWeight: 800,
                fontSize: 15,
                marginBottom: 4
              }}>{club.direction}</div>
              <div style={{
                fontSize: 15,
                color: '#888',
                marginBottom: 8
              }}>
                {club.city}, {club.address}
              </div>
              <div style={{
                fontSize: 16,
                color: '#333',
                fontWeight: 700,
                marginBottom: 6
              }}>
                Возраст: <span style={{ color: '#4AA7F5' }}>{club.age}</span>
              </div>
              <div style={{
                fontSize: 16,
                color: '#E3A00C',
                fontWeight: 800,
                marginBottom: 11
              }}>
                {club.price}
              </div>
              <div style={{
                fontSize: 15,
                color: '#444',
                marginBottom: 11
              }}>{club.desc}</div>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <button
                style={{
                  background: 'linear-gradient(90deg,#A7E04B 60%,#4AA7F5 100%)',
                  color: '#222',
                  fontWeight: 900,
                  fontSize: 17,
                  border: 'none',
                  borderRadius: 14,
                  padding: '13px 38px',
                  cursor: 'pointer',
                  marginTop: 10,
                  marginBottom: 5,
                  boxShadow: '0 2px 8px #4aa7f520'
                }}
              >
                Записаться
              </button>
            </div>
          </div>
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
