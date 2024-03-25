import { Text } from '../../../ui-kit';

function InputTitle({ children }: { children: string }) {
  return (
    <Text weight="bold" color="grey80">
      {children}
      <span style={{ color: 'var(--color-special-red-brended)' }}>&nbsp;*</span>
    </Text>
  );
}

export default InputTitle;
