interface CardProps {
  img: ReactComponent;
  title: string;
  text: string;
}

interface logoProps {
  color?: 'red' | 'grey';
}

interface CustomTextProps {
  children: string;
  weight?: 'normal' | 'bold';
  size: '14px' | '16px' | '20px' | '24px';
  color?: 'black' | 'grey';
}
