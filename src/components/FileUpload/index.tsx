import styles from './styles.module.scss';
import { CrossIcon, LoadingIcon } from '../../assets/icons';
import { Text, Gap } from '../../ui-kit';
import { useState } from 'react';

function FileUpload() {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const fileList = files && (
    <>
      <Gap height={16} />
      <ul className={styles.list}>
        {Array.from(files).map((file, index) => (
          <li key={index}>
            <LoadingIcon id={styles.loading} />
            {file.name}
            <CrossIcon onClick={() => setFiles(null)} id={styles.icon} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className={styles.fileUpload}>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={styles.container}
      >
        <label htmlFor="fileUploader" className={styles.label}>
          <input
            type="file"
            multiple
            id="fileUploader"
            className={styles.input}
            onChange={event => setFiles(event.target.files)}
            hidden
          />
          <Text size="16px" color="grey80" style={{ paddingLeft: '90px' }}>
            Перетащите или <span className={styles.span}>выберите 1 файл</span>
          </Text>
          <Text color="grey50" style={{ paddingLeft: '90px' }}>
            Допустимые форматы: doc, pdf до 10 мб
          </Text>
        </label>
      </div>
      {fileList}
    </div>
  );
}

export default FileUpload;
