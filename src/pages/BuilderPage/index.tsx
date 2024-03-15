import PaymentMethod from '../../components/PaymentMethod';
import Button from '../../ui-kit/Button';
import CustomText from '../../ui-kit/CustomText';
import Title from '../../ui-kit/Title';

export default function BuilderPage() {
  return (
    <>
      <h1>Builder</h1>
      <CustomText text="CustomText!" weight="bold" size="20px" />
      <Title text="Title!" tag="h2" />
      <Button view="flat">Кнопка </Button>
      <Button view="filled">Кнопка </Button>
      <Button view="flat" variant="secondary">
        Кнопка
      </Button>
      <Button view="filled" variant="secondary">
        Кнопка
      </Button>
      <PaymentMethod />
    </>
  );
}
