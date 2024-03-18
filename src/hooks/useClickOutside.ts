import { useEffect } from 'react';

const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent) => void,
  isActive: boolean,
) => {
  useEffect(() => {
    if (!isActive) {
      return;
    }
    const listener = (event: MouseEvent) => {
      console.log(ref.current);
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler, isActive]);
};

export default useClickOutside;
