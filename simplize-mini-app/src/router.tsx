import { UrlInternal } from '@/constants/url-internal';
import TestPageOne from './pages/TestPageOne';
import TestPageTwo from './pages/TestPageTwo';

export const routes = {
  HOME_PAGE: {
    url: UrlInternal.HOME,
    element: <TestPageOne />,
  },
  PAGE_TWO: {
    url: UrlInternal.PAGE_TWO,
    element: <TestPageTwo />,
  },
};
