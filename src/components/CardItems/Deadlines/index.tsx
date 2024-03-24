import InputTitle from '../InputTitle';
import { Gap, Label, Text, CustomCalendar } from '../../../ui-kit';
import { DEADLINES } from '../../../utils/constans';

const labelState = true;

function Deadlines() {
  return (
    <>
      <InputTitle>{DEADLINES.inputTitle}</InputTitle>
      <Gap height={12} />
      <CustomCalendar />
      <Gap height={32} />
      <Label text={DEADLINES.label} variant="success" />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {DEADLINES.labelDescription}
      </Text>
      {labelState && (
        <>
          <Gap height={16} />
          <Text weight="bold" color="grey80">
            {DEADLINES.inputTitle2}
          </Text>
          <Gap height={12} />
          <CustomCalendar />
        </>
      )}
    </>
  );
}

export default Deadlines;
