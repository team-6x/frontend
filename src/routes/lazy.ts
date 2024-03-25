import { lazy } from 'react';

const BuilderPage = lazy(() => import('../pages/BuilderPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export { BuilderPage, NotFoundPage };
