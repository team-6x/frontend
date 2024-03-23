import { useNavigate } from 'react-router-dom';
import PaymentMethod from '../../components/PaymentMethod';
import FileUpload from '../../components/FileUpload';
import { Popup } from '../../ui-kit';
import {
  CANСEL_VACATION_POPUP_CONFIG,
  VACANCY_TABS,
  RECRUITER_TABS,
} from '../../utils/constans';
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
  MultiSelect,
} from '../../ui-kit';
import { useState } from 'react';
import { Skeleton } from '../../ui-kit';

const options = [
  { name: 'Нет', id: 1 },
  { name: 'Курсы', id: 2 },
  { name: 'от 1 года до 3 лет', id: 3 },
];

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
        <Skeleton />
        <Input
          placeholder="Input"
          errorText="Error"
          icon
          label="Обязанности сотрудника"
        />
      </Card>

      <PaymentMethod />
      <Checkbox label="Checkbox" />

      <Select
        options={options}
        placeholder="Заполните опыт"
        label="Опыт работы"
      />
      <MultiSelect
        options={options}
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

      <FileUpload />

      <BackButton />
      <Popup
        isOpen={popupsState}
        handleClose={() => setPopupsState(false)}
        config={CANСEL_VACATION_POPUP_CONFIG}
      />
      <Tabs config={VACANCY_TABS} />
      <Tabs config={RECRUITER_TABS} />
    </div>
  );
}
