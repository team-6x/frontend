import Card from './Card';
import payToHireImage from '../../../assets/icons/super-boss.svg';
import fiftyFiftyImage from '../../../assets/icons/man-working.svg';
import payAfterMonthImage from '../../../assets/icons/man-writing.svg';
import { CARDS_TEXT } from '../../../utils/constans';

function CardPayToHire() {
  return (
    <Card
      img={payToHireImage}
      title={CARDS_TEXT.PAY_TO_HIRE.TITLE}
      text={CARDS_TEXT.PAY_TO_HIRE.TEXT}
    />
  );
}

function CardFiftyFifty() {
  return (
    <Card
      img={fiftyFiftyImage}
      title={CARDS_TEXT.FIFTY_FIFTY.TITLE}
      text={CARDS_TEXT.FIFTY_FIFTY.TEXT}
    />
  );
}

function CardPayAfterMonth() {
  return (
    <Card
      img={payAfterMonthImage}
      title={CARDS_TEXT.PAY_AFTER_MONTH.TITLE}
      text={CARDS_TEXT.PAY_AFTER_MONTH.TEXT}
    />
  );
}

export { CardPayToHire, CardFiftyFifty, CardPayAfterMonth };
