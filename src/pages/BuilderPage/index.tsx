import PaymentMethod from '../../components/PaymentMethod';
import { Tabs, Input, Title, Text, Button } from '../../ui-kit';
import Select from '../../components/Select';

export default function BuilderPage() {
  return (
    <>
      <Title>Builder</Title>
      <Text weight="bold" size="20px">
        Текст
      </Text>
      <Button view="flat">Кнопка </Button>
      <Button view="filled">Кнопка </Button>
      <Button view="flat" variant="secondary">
        Кнопка
      </Button>
      <Button view="filled" variant="secondary">
        Кнопка
      </Button>
      <Input placeholder="Input" errorText="Error" />
      <PaymentMethod />
      <Tabs />
      <Select
        options={['Нет', 'Курсы', 'от 1 года до 3 лет']}
        placeholder="Privet"
        label="Опыт работы"
      />
    </>
  );
}
