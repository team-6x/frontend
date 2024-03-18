import PaymentMethod from '../../components/PaymentMethod';


import Select from '../../components/Select';

import {
  Tabs,
  Input,
  Title,
  Text,
  Button,
  Checkbox,
  Chip,
  Tooltip,
  Label,
  Card,
} from '../../ui-kit';


export default function BuilderPage() {
  return (
    <>
      <Title>Builder</Title>
      <Text weight="bold" size="20px">
        Текст
      </Text>
      <Card highlight>
        <Button view="flat">Кнопка </Button>
        <Button view="filled">Кнопка </Button>
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
      <Tabs />

      <Select
        options={['Нет', 'Курсы', 'от 1 года до 3 лет']}
        placeholder="Privet"
        label="Опыт работы"
      />

      <Tooltip>
        <Text color="white">
          Через две недели будут доступны первые резюме по указанной цене в
          данной профессиональной области. Желаете получить их через неделю?В
          таком случае, рекомендуем увеличить цену на 10 000
        </Text>
      </Tooltip>
      <Chip label="Chip" />
      <Card preview>
        <Label text="Urgent" variant="default" />
        <Label text="Resolved" variant="success" />
        <Label text="Information" variant="info" />
      </Card>

    </>
  );
}
