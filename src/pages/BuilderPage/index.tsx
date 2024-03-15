import PaymentMethod from '../../components/PaymentMethod';
import Button from '../../ui-kit/Button';
import Text from '../../ui-kit/Text';
import Title from '../../ui-kit/Title';
import Input from '../../ui-kit/Input';

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
    </>
  );
}
