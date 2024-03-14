import Card from "./Card";
import payToHire from "../../../assets/icons/super-boss.svg";
import fiftyFifty from "../../../assets/icons/man-working.svg";
import payAfterMonth from "../../../assets/icons/man-writing.svg";

const titlePayToHire = "100% за выход сотрудника";
const textPayToHire =
  "Если хотите, чтобы на заявку откликались «звёздные» рекрутеры с опытом, выбирайте этот вариант оплаты. Чтобы ещё больше повысить шансы на отклик от такого исполнителя, предлагайте оплату выше среднемесячного оклада нанимаемого кандидата";
const titleFiftyFifty = "50% — после выхода, 50% — после гарантийного периода";
const textFiftyFifty =
  "Гарантийный период — испытательный срок, который определяете вы. Обычно это 1 месяц после выхода сотрудника";
const titlePayAfterMonth = "100% после гарантийного периода";
const textPayAfterMonth =
  "За такие заявки берутся реже всего — для рекрутера это риск не получить оплату, если компани и сотрудник прекратят сотрудничество";

function CardPayToHire() {
  return <Card img={payToHire} title={titlePayToHire} text={textPayToHire} />;
}

function CardFiftyFifty() {
  return (
    <Card img={fiftyFifty} title={titleFiftyFifty} text={textFiftyFifty} />
  );
}

function CardPayAfterMonth() {
  return (
    <Card
      img={payAfterMonth}
      title={titlePayAfterMonth}
      text={textPayAfterMonth}
    />
  );
}

export { CardPayToHire, CardFiftyFifty, CardPayAfterMonth };
