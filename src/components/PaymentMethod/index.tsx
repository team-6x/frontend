import styles from './styles.module.scss';
import {
  PayToHireImage,
  FiftyFiftyImage,
  PayAfterMonthImage,
} from '../../assets/icons';
import { CARDS_TEXT } from '../../utils/constans';

function PaymentMethod() {
  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.button}>
        <input
          type="radio"
          id="payToHire"
          name="paymentMethod"
          value="payToHire"
        />
        <label htmlFor="payToHire">
          <PayToHireImage className={styles.image} />
          <p className={styles.title}>{CARDS_TEXT.PAY_TO_HIRE.TITLE}</p>
          <p className={styles.text}>{CARDS_TEXT.PAY_TO_HIRE.TEXT}</p>
        </label>
      </div>

      <div className={styles.button}>
        <input
          type="radio"
          id="fiftyFifty"
          name="paymentMethod"
          value="fiftyFifty"
        />
        <label htmlFor="fiftyFifty">
          <FiftyFiftyImage className={styles.image} />
          <p className={styles.title}>{CARDS_TEXT.FIFTY_FIFTY.TITLE}</p>
          <p className={styles.text}>{CARDS_TEXT.FIFTY_FIFTY.TEXT}</p>
        </label>
      </div>

      <div className={styles.button}>
        <input
          type="radio"
          id="payAfterMonth"
          name="paymentMethod"
          value="payAfterMonth"
        />
        <label htmlFor="payAfterMonth">
          <PayAfterMonthImage className={styles.image} />
          <p className={styles.title}>{CARDS_TEXT.PAY_AFTER_MONTH.TITLE}</p>
          <p className={styles.text}>{CARDS_TEXT.PAY_AFTER_MONTH.TEXT}</p>
        </label>
      </div>
    </fieldset>
  );
}

export default PaymentMethod;
