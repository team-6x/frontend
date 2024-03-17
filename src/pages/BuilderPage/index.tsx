import PaymentMethod from '../../components/PaymentMethod';
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
      <Chip label="Chip" />
      <Tooltip>Tooltip</Tooltip>
      <Card preview>
        <Label text="Urgent" variant="default" />
        <Label text="Resolved" variant="success" />
        <Label text="Information" variant="info" />
      </Card>
    </>
  );
}
