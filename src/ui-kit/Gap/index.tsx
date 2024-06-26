interface GapProps {
  height?: 8 | 12 | 16 | 24 | 32 | 40 | 80;
}

function Gap({ height = 12 }: GapProps) {
  return <div style={{ minHeight: `${height}px` }} />;
}

export default Gap;
