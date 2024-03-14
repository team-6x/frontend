import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import styles from './styles.module.css';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <ScrollToTop>
      {/* <Header /> */}
      <main className={styles.layout__main}>
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
      {/* <Footer /> */}
    </ScrollToTop>
  );
}
