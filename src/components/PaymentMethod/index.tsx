import styles from './styles.module.scss';
import {
  PayToHireImage,
  FiftyFiftyImage,
  PayAfterMonthImage,
} from '../../assets/icons';
import { Text } from '../../ui-kit';
import { useActions } from '../../hooks/actions';

const cardsConfig = [
  {
    title: '100% за выход сотрудника',
    text: 'Если хотите, чтобы на заявку откликались «звёздные» рекрутеры с опытом, выбирайте этот вариант оплаты. Чтобы ещё больше повысить шансы на отклик от такого исполнителя, предлагайте оплату выше среднемесячного оклада нанимаемого кандидата',
    image: PayToHireImage,
    id: 1,
    label: 'payToHire',
  },
  {
    title: '50% — после выхода, 50% — после гарантийного периода',
    text: 'Гарантийный период — испытательный срок длительностью в 1 месяц после выхода сотрудника',
    image: FiftyFiftyImage,
    id: 2,
    label: 'fiftyFifty',
  },
  {
    title: '100% после гарантийного периода',
    text: 'За такие заявки берутся реже всего — для рекрутера это риск не получить оплату, если компани и сотрудник прекратят сотрудничество',
    image: PayAfterMonthImage,
    id: 3,
    label: 'payAfterMonth',
  },
];

function PaymentMethod() {
  const { setSecondResult, setSecondStep } = useActions();

  return (
    <section className={styles.paymentMethod}>
      <Text size="24px" weight="bold" style={{ margin: '0 auto 12px' }}>
        Условия компенсации
      </Text>
      <Text size="20px" style={{ margin: '0 auto 40px' }}>
        Выберите тариф оплаты работы рекрутера
      </Text>
      <fieldset className={styles.list}>
        {cardsConfig.map(card => {
          return (
            <div className={styles.button} key={card.id}>
              <input
                type="radio"
                id={card.label}
                name="paymentMethod"
                value={card.label}
                onClick={() => {
                  setSecondResult(card.label);
                  setSecondStep(true);
                }}
              />
              <label htmlFor={card.label}>
                {<card.image className={styles.image} />}
                <p className={styles.text}>{card.text}</p>
                <p className={styles.title}>{card.title}</p>
              </label>
            </div>
          );
        })}
      </fieldset>
    </section>
  );
}

export default PaymentMethod;
