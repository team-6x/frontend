interface StarIconProps {
  color?: 'lilac' | 'minty';
}

const colorMap: { [key: string]: string } = {
  lilac: 'var(--color-special-lilac-ice)',
  minty: 'var(--color-special-minty-air)',
};

function StarIcon({ color = 'lilac' }: StarIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9301 24C11.9301 17.4026 6.59515 12.0657 0 12.0657V11.9343C6.59515 11.9343 11.9301 6.59744 11.9301 0H12.0699C12.0699 6.59744 17.4049 11.9343 24 11.9343V12.0657C17.4049 12.0657 12.0699 17.4026 12.0699 24H11.9301Z"
        fill={colorMap[color]}
      />
    </svg>
  );
}

export default StarIcon;
