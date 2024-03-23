import { Title, Tabs, Gap } from '../../ui-kit';
import styles from './styles.module.scss';

export default function Section({
  children,
  title,
  tabsConfig,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  tabsConfig?: {
    title: string;
    id: number;
  }[];
  subtitle?: string;
}) {
  return (
    <section className={styles.section}>
      <Title tag="h2" style={{ margin: '40px 0' }}>
        {title}
      </Title>
      {subtitle && <Title tag="h3">{subtitle}</Title>}
      {tabsConfig && <Tabs config={tabsConfig} />}
      <Gap height={32} />
      {children}
    </section>
  );
}
