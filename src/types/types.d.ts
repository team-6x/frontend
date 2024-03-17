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
  size?: '14px' | '16px' | '20px' | '24px';
  color?: 'black' | 'grey50' | 'grey80';
}

interface SelectProps {
  options: string[];
  placeholder: string;
  label: string;
}
