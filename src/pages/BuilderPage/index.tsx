import PaymentMethod from '../../components/PaymentMethod';
import CustomText from '../../ui-kit/CustomText';
import Title from '../../ui-kit/Title';

export default function BuilderPage() {
  return (
    <>
      <h1>Builder</h1>
      <CustomText text="CustomText!" weight="bold" size="20px" />
      <Title text="Title!" tag="h2" />
      <PaymentMethod />
    </>
  );
}
