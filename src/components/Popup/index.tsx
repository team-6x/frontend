import styles from './styles.module.scss';
import { Button } from '../../ui-kit';
import { CrossIcon } from '../../assets/icons';
import { createPortal } from 'react-dom';
import usePopupClose from '../../hooks/usePopupClose';

interface PopupProps {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  text: string;
  successButtonText: string;
  cancelButtonText: string;
}

function Popup({
  isOpen,
  handleClose,
  title,
  text,
  successButtonText,
  cancelButtonText,
}: PopupProps) {
  usePopupClose(isOpen, handleClose, styles.popup_opened);

  return createPortal(
    <div className={`${styles.popup} ${isOpen ? styles.popup_opened : ''}`}>
      <div className={styles.container}>
        <CrossIcon className={styles.icon} onClick={handleClose} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Button>{successButtonText}</Button>
        <Button view="flat">{cancelButtonText}</Button>
      </div>
    </div>,
    document.body,
  );
}

export default Popup;
