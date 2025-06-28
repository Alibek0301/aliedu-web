type Props = {
  selectedRole: string;
  onChange: (role: string) => void;
};

const ROLES = [
  { key: 'parent', label: 'Родитель/Ученик' },
  { key: 'club', label: 'Кружок/Центр' },
  { key: 'admin', label: 'Администратор' }
];

export function RoleSelector({ selectedRole, onChange }: Props) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>Ваша роль:</div>
      <div style={{ display: 'flex', gap: 14 }}>
        {ROLES.map(role => (
          <button
            key={role.key}
            onClick={() => onChange(role.key)}
            style={{
              background: selectedRole === role.key ? '#4AA7F5' : '#EEE',
              color: selectedRole === role.key ? 'white' : '#444',
              border: 'none',
              borderRadius: 9,
              padding: '9px 22px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 15
            }}
          >
            {role.label}
          </button>
        ))}
      </div>
    </div>
  );
}
