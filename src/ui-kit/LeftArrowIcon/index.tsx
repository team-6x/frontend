interface LeftArrowIconProps {
  color?: 'grey' | 'blue';
}

const colorMap: { [key: string]: string } = {
  grey: '#959799',
  blue: 'var(--color-blue-60)',
};

function LeftArrowIcon({ color = 'grey' }: LeftArrowIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3438 19.75L8.34375 12.75L15.3438 5.75"
        stroke={colorMap[color]}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default LeftArrowIcon;
