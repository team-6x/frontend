import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import styles from './styles.module.scss';
import { Suspense } from 'react';
import Header from '../Header';
import Footer from '../Footer';

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
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <p>Loading...</p>
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
