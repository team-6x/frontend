import styles from './styles.module.scss';
import {
  PayToHireImage,
  FiftyFiftyImage,
  PayAfterMonthImage,
} from '../../assets/icons';
import { useActions } from '../../hooks/useActions';

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

interface IPaymentMethod {
  nextStepHandleClick: () => void;
}

const PaymentMethod: React.FC<IPaymentMethod> = ({ nextStepHandleClick }) => {
  const { setPayMethod } = useActions();

  return (
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
                setPayMethod(card.label);
                nextStepHandleClick();
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
  );
};

export default PaymentMethod;
