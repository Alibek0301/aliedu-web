import { useState } from 'react';
import ClubsCatalog from './pages/ClubsCatalog';
import AuthPage from './pages/AuthPage';
import ParentDashboard from './pages/ParentDashboard';
import ClubDashboard from './pages/ClubDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ChildProfile from './pages/ChildProfile';

function App() {
  // добавлена страница 'child'
  const [page, setPage] = useState<'home' | 'catalog' | 'auth' | 'parent' | 'club' | 'admin' | 'child'>('home');
  const [user, setUser] = useState<{ role: string, name: string } | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5faff 0%, #e0f5ff 100%)',
      fontFamily: 'Nunito, Arial, sans-serif',
    }}>
      <header style={{
        padding: '22px 0 22px 0',
        maxWidth: 860,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span
          style={{
            fontWeight: 900,
            fontSize: 34,
            letterSpacing: 1.5,
            color: '#4AA7F5',
            cursor: 'pointer',
            textShadow: '0 2px 12px #0001',
            marginLeft: 18,
            fontFamily: 'Nunito, Arial, sans-serif'
          }}
          onClick={() => setPage('home')}
        >
          Aliedu
        </span>
        <span>
          {user ? (
            <span style={{
              fontSize: 17,
              fontWeight: 700,
              color: '#222',
              marginRight: 8,
              background: '#F5F5F5',
              borderRadius: 12,
              padding: '7px 16px 7px 20px',
              boxShadow: '0 2px 12px #0001'
            }}>
              <span style={{ color: '#4AA7F5' }}>
                {user.name}
              </span>
              <span style={{
                marginLeft: 7,
                color: '#A7E04B',
                background: '#fff',
                borderRadius: 8,
                padding: '3px 11px',
                fontWeight: 700,
                fontSize: 14
              }}>
                {user.role === 'parent' ? 'Родитель' : user.role === 'club' ? 'Кружок' : 'Админ'}
              </span>
              {/* Кнопка "Личный кабинет" для родителя */}
              {user.role === 'parent' && (
                <>
                  <button
                    style={{
                      marginLeft: 16,
                      border: 'none',
                      background: '#A7E04B',
                      borderRadius: 10,
                      padding: '7px 18px',
                      color: '#233F11',
                      fontWeight: 800,
                      fontSize: 15,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px #a7e04b2d'
                    }}
                    onClick={() => setPage('parent')}
                  >
                    Личный кабинет
                  </button>
                  <button
                    style={{
                      marginLeft: 10,
                      border: 'none',
                      background: '#4AA7F5',
                      borderRadius: 10,
                      padding: '7px 18px',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: 15,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px #4aa7f52d'
                    }}
                    onClick={() => setPage('child')}
                  >
                    Профиль ученика
                  </button>
                </>
              )}
              {/* Кнопка "Личный кабинет" для кружка */}
              {user.role === 'club' && (
                <button
                  style={{
                    marginLeft: 16,
                    border: 'none',
                    background: '#A7E04B',
                    borderRadius: 10,
                    padding: '7px 18px',
                    color: '#233F11',
                    fontWeight: 800,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #a7e04b2d'
                  }}
                  onClick={() => setPage('club')}
                >
                  Личный кабинет
                </button>
              )}
              {/* Кнопка "Админ-панель" для админа */}
              {user.role === 'admin' && (
                <button
                  style={{
                    marginLeft: 16,
                    border: 'none',
                    background: '#A7E04B',
                    borderRadius: 10,
                    padding: '7px 18px',
                    color: '#233F11',
                    fontWeight: 800,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px #a7e04b2d'
                  }}
                  onClick={() => setPage('admin')}
                >
                  Админ-панель
                </button>
              )}
              <button
                style={{
                  marginLeft: 16,
                  border: 'none',
                  background: '#fff',
                  borderRadius: 10,
                  padding: '7px 18px',
                  color: '#E76431',
                  fontWeight: 800,
                  fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #0001'
                }}
                onClick={() => setUser(null)}
              >
                Выйти
              </button>
            </span>
          ) : (
            <>
              <button
                style={{
                  marginRight: 14,
                  border: 'none',
                  background: '#fff',
                  borderRadius: 10,
                  padding: '7px 20px',
                  color: '#4AA7F5',
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #0001'
                }}
                onClick={() => {
                  setAuthMode('login');
                  setPage('auth');
                }}
              >
                Login
              </button>
              <button
                style={{
                  border: 'none',
                  background: '#4AA7F5',
                  borderRadius: 10,
                  padding: '7px 24px',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 16,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px #4aa7f526'
                }}
                onClick={() => {
                  setAuthMode('register');
                  setPage('auth');
                }}
              >
                Регистрация
              </button>
            </>
          )}
        </span>
      </header>
      <main>
        {page === 'home' && (
          <div style={{
            maxWidth: 600,
            margin: '48px auto',
            background: '#fff',
            borderRadius: 30,
            boxShadow: '0 4px 24px #0001',
            padding: 40,
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: 32,
              fontWeight: 900,
              color: '#4AA7F5',
              marginBottom: 22,
              fontFamily: 'Nunito, Arial, sans-serif'
            }}>
              Найдите кружки и занятия для детей
            </h1>
            <p style={{
              fontSize: 20,
              color: '#555',
              marginBottom: 28,
              fontWeight: 600
            }}>
              Aliedu — удобная платформа для поиска кружков, секций и дополнительных занятий в вашем городе.
            </p>
            <button
              style={{
                marginTop: 10,
                background: 'linear-gradient(90deg,#A7E04B 60%,#4AA7F5 100%)',
                color: '#222',
                fontWeight: 900,
                fontSize: 20,
                border: 'none',
                borderRadius: 16,
                padding: '16px 50px',
                cursor: 'pointer',
                boxShadow: '0 2px 12px #4aa7f520'
              }}
              onClick={() => setPage('catalog')}
            >
              Перейти в каталог
            </button>
          </div>
        )}
        {page === 'catalog' && <ClubsCatalog />}
        {page === 'auth' && (
          <AuthPage
            defaultMode={authMode}
            onLogin={(role, name) => {
              setUser({ role, name });
              setPage('home');
            }}
          />
        )}
        {page === 'parent' && <ParentDashboard />}
        {page === 'club' && <ClubDashboard />}
        {page === 'admin' && <AdminDashboard />}
        {page === 'child' && <ChildProfile />}
      </main>
      <footer style={{
        textAlign: 'center',
        color: '#B2C1D1',
        marginTop: 64,
        fontSize: 14,
        fontWeight: 600
      }}>
        &copy; {new Date().getFullYear()} Aliedu — все права защищены
      </footer>
    </div>
  );
}

export default App;
