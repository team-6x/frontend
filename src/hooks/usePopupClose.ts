import { useEffect } from 'react';

export default function usePopupClose(
  isOpen: boolean,
  className1: string,
  className2: string,
  className3: string,
  closePopup: () => void,
) {
  useEffect(() => {
    if (!isOpen) return;

    const handleOverlay = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.classList.contains(className2) &&
        !target.classList.contains(className1) &&
        !target.classList.contains(className3)
      ) {
        closePopup();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlay);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlay);
    };
  }, [isOpen, closePopup]);
}
