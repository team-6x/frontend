import { useEffect } from 'react';

export default function usePopupClose(
  isOpen: boolean,
  closePopup: () => void,
  popupClass: string,
) {
  useEffect(() => {
    if (!isOpen) return;

    const handleOverlay = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(`${popupClass}`)) {
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
  }, [isOpen]);
}
