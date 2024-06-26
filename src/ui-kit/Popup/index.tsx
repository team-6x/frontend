import styles from './styles.module.scss';
import { Button, Text, Gap } from '..';
import { CrossIcon } from '../../assets/icons';
import { createPortal } from 'react-dom';
import usePopupClose from '../../hooks/usePopupClose';

interface PopupProps {
  isOpen: boolean;
  handleClose: () => void;
  config: { [key: string]: string };
}

function Popup({ isOpen, handleClose, config }: PopupProps) {
  usePopupClose(isOpen, handleClose, styles.popup);

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={styles.popup}>
            <div className={styles.container}>
              <CrossIcon className={styles.icon} onClick={handleClose} />
              <Text size="24px" weight="bold">
                {config.title}
              </Text>
              <Gap />
              <Text size="16px" color="grey50">
                {config.text}
              </Text>
              <Gap height={24} />
              <Button>{config.success}</Button>
              <Gap />
              <Button view="flat">{config.cancel}</Button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default Popup;
