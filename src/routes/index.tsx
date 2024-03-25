import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { NotFoundPage, BuilderPage } from './lazy';

import Layout from '../components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
        <Route index element={<BuilderPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
  {
    basename: '/',
  },
);

export default router;
