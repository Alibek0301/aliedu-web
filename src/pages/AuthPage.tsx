import { useState } from 'react';
import { RoleSelector } from '../components/RoleSelector';

type Props = {
  onLogin: (role: string, name: string) => void;
};

export default function AuthPage({ onLogin }: Props) {
  const [role, setRole] = useState('parent');
  const [name, setName] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('register');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return;
    onLogin(role, name);
  }

  return (
    <div style={{
      maxWidth: 400,
      margin: '60px auto',
      background: 'white',
      borderRadius: 18,
      boxShadow: '0 2px 12px #0001',
      padding: 30
    }}>
      <h2 style={{ fontWeight: 800, marginBottom: 20 }}>
        {mode === 'register' ? 'Регистрация' : 'Вход'}
      </h2>
      <form onSubmit={handleSubmit}>
        <RoleSelector selectedRole={role} onChange={setRole} />
        <input
          placeholder="Ваше имя"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{
            width: '100%',
            marginBottom: 18,
            padding: 10,
            borderRadius: 8,
            border: '1px solid #EEE',
            fontSize: 16
          }}
        />
        <button type="submit" style={{
          width: '100%',
          background: '#4AA7F5',
          color: 'white',
          border: 'none',
          borderRadius: 9,
          padding: '12px 0',
          fontWeight: 700,
          fontSize: 17,
          cursor: 'pointer'
        }}>
          {mode === 'register' ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>
      <div style={{ marginTop: 16, textAlign: 'center', fontSize: 14 }}>
        {mode === 'register' ? (
          <>
            Уже есть аккаунт?{' '}
            <button style={{ color: '#4AA7F5', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setMode('login')}>Войти</button>
          </>
        ) : (
          <>
            Нет аккаунта?{' '}
            <button style={{ color: '#4AA7F5', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setMode('register')}>Регистрация</button>
          </>
        )}
      </div>
    </div>
  );
}
