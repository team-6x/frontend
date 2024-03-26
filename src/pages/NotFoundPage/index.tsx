import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui-kit';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Button onClick={() => navigate('/')} view="flat">
        На главную
      </Button>
    </div>
  );
}
