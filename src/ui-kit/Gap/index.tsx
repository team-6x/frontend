interface GapProps {
  height?: 12 | 24;
}

function Gap({ height = 12 }: GapProps) {
  return <div style={{ height: `${height}px` }} />;
}

export default Gap;
