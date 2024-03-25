import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import styles from './styles.module.scss';
import { Suspense } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Skeleton } from '../../ui-kit';

export default function Layout() {
  return (
    <ScrollToTop>
      <>
        <Header />
        <main className={styles.layout}>
          <Suspense
            fallback={
              <div
                style={{
                  margin: '20px',
                  width: '100%',
                  height: '40vh',
                }}
              >
                <Skeleton />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </>
    </ScrollToTop>
  );
}
