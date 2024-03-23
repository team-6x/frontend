interface GapProps {
  height?: 12 | 16 | 24 | 32 | 40 | 80;
}

function Gap({ height = 12 }: GapProps) {
  return <div style={{ height: `${height}px` }} />;
}

export default Gap;
