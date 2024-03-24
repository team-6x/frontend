import InputTitle from '../InputTitle';
import { Gap, Label, Text, CustomCalendar } from '../../../ui-kit';
import { DEADLINES } from '../../../utils/constans';
import { useState } from 'react';

function Deadlines() {
  const [label, setLabel] = useState(false);
  return (
    <>
      <InputTitle>{DEADLINES.inputTitle}</InputTitle>
      <Gap height={12} />
      <CustomCalendar />
      <Gap height={32} />
      <Label
        text={DEADLINES.label}
        variant={label ? 'success' : 'info'}
        onClick={() => setLabel(prev => !prev)}
      />
      <Gap height={8} />
      <Text size="12px" color="grey40">
        {DEADLINES.labelDescription}
      </Text>
      {label && (
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
