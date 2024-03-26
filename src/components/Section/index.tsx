import { Title, Tabs, Gap } from '../../ui-kit';
import styles from './styles.module.scss';

export default function Section({
  children,
  title,
  tabsConfig,
  subtitle,
  tabState,
  tabHandler,
  id,
}: {
  children: React.ReactNode;
  title: string;
  tabsConfig?: {
    title: string;
    id: number;
  }[];
  subtitle?: string;
  tabState?: number;
  tabHandler?: (id: number) => void;
  id?: string;
}) {
  return (
    <section className={styles.section} id={id}>
      <Title tag="h2" style={{ margin: '40px 0' }}>
        {title}
      </Title>
      {subtitle && (
        <Title tag="h3" style={{ fontSize: '20px', fontWeight: 400 }}>
          {subtitle}
        </Title>
      )}
      {tabsConfig && tabState !== undefined && tabHandler !== undefined && (
        <Tabs config={tabsConfig} tabState={tabState} tabHandler={tabHandler} />
      )}
      <Gap height={32} />
      {children}
    </section>
  );
}
