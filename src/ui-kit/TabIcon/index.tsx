interface TabIconProps {
  isFilled?: boolean;
  style?: React.CSSProperties;
}

function TabIcon({ isFilled = false, style }: TabIconProps) {
  return (
    <svg
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="11.5"
        fill={isFilled ? 'var(--color-blue-40)' : 'var(--color-primary-white)'}
      />
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="11.5"
        stroke="var(--color-blue-40)"
      />
      <path
        d="M7.3335 12.6666L10.0002 15.3333L16.6668 8.66663"
        stroke={
          isFilled ? 'var(--color-primary-white)' : 'var(--color-blue-40)'
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TabIcon;
