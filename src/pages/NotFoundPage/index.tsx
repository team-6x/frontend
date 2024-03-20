import { useNavigate } from 'react-router-dom';
import PaymentMethod from '../../components/PaymentMethod';
import Popup from '../../components/Popup';
import { POPUPS_CONFIG, TABS_CONFIG } from '../../utils/constans';
import {
  Input,
  Title,
  Text,
  Button,
  Checkbox,
  Chip,
  Tooltip,
  Label,
  Card,
  Select,
  BackButton,
  Tabs,
} from '../../ui-kit';
import { useState } from 'react';

const newTabConfig = TABS_CONFIG.slice(0, 4);
export default function NotFoundPage() {
  const [popupsState, setPopupsState] = useState(false);
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
      <button onClick={() => navigate('/')}>На главную</button>

      <Title>Builder</Title>
      <Text weight="bold" size="20px">
        Текст
      </Text>
      <Card highlight>
        <Button view="flat" onClick={() => setPopupsState(true)}>
          Кнопка
        </Button>
        <Button view="filled">Кнопка</Button>
        <Button view="flat" variant="secondary">
          Кнопка
        </Button>
        <Button view="filled" variant="secondary">
          Кнопка
        </Button>
      </Card>
      <Input placeholder="Input" errorText="Error" />
      <PaymentMethod />
      <Checkbox label="Checkbox" />

      <Select
        options={['Нет', 'Курсы', 'от 1 года до 3 лет']}
        placeholder="Заполните опыт"
        label="Опыт работы"
      />

      <Tooltip>
        <Text color="white">
          Через две недели будут доступны первые резюме по указанной цене в
          данной профессиональной области. Желаете получить их через неделю? В
          таком случае, рекомендуем увеличить цену на 10 000
        </Text>
      </Tooltip>
      <Chip label="Chip" />
      <Card preview>
        <Label text="Urgent" variant="default" />
        <Label text="Resolved" variant="success" />
        <Label text="Information" variant="info" />
      </Card>

      <BackButton />
      <Popup
        isOpen={popupsState}
        handleClose={() => setPopupsState(false)}
        config={POPUPS_CONFIG.CANСEL_VACATION}
      />
      <Tabs config={TABS_CONFIG} />
      <Tabs config={newTabConfig} />
    </div>
  );
}
