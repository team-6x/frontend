import styles from "./styles.module.scss";
import {
  CardPayToHire,
  CardFiftyFifty,
  CardPayAfterMonth,
} from "./PaymentCards";

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
          <CardPayToHire />
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
          <CardFiftyFifty />
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
          <CardPayAfterMonth />
        </label>
      </div>
    </fieldset>
  );
}

export default PaymentMethod;
