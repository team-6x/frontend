import styles from './styles.module.scss';
import { CrossIcon, LoadingIcon } from '../../assets/icons';
import { Text, Gap } from '..';

interface IFileUpload {
  state: FileType[];
  setState: (value: FileType[]) => void;
}

const FileUpload: React.FC<IFileUpload> = ({ state, setState }) => {
  const hasFiles = state.length > 0;

  const toArray = (files: FileList) =>
    Array.from(files).map(file => {
      return {
        name: file.name,
        size: file.size,
        type: file.type,
      };
    });

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = toArray(e.dataTransfer.files);
    hasFiles ? setState([...state, ...files]) : setState(files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = toArray(files);
      setState([...state, ...newFiles]);
    }
  };

  const handleClear = (index: number) => {
    setState(state.filter((_, i) => i !== index));
  };

  const fileList = hasFiles && (
    <>
      <Gap height={16} />
      <ul className={styles.list}>
        {state.map((file, index) => (
          <li key={index}>
            <LoadingIcon id={styles.loading} />
            {file.name}
            <CrossIcon onClick={() => handleClear(index)} id={styles.icon} />
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
            accept=".doc,.docx,.pdf"
            id="fileUploader"
            className={styles.input}
            onChange={handleChange}
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
};

export default FileUpload;
