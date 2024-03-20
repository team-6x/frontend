import styles from './styles.module.scss';
import { Button, Text, Gap } from '../../ui-kit';
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
                {config.TITLE}
              </Text>
              <Gap />
              <Text size="16px" color="grey50">
                {config.TEXT}
              </Text>
              <Gap height={24} />
              <Button>{config.SUCCESS}</Button>
              <Gap />
              <Button view="flat">{config.CANCEL}</Button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default Popup;
