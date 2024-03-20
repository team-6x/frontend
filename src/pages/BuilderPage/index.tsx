import ResultCard from '../../components/ResultCard';
import Section from '../../components/Section';
import { TABS_CONFIG } from '../../utils/constans';
import styles from './styles.module.scss';

export default function BuilderPage() {
  return (
    <div className={styles.container}>
      <Section title="Создание вакансии" tabsConfig={TABS_CONFIG}>
        <ResultCard />
      </Section>
    </div>
  );
}
