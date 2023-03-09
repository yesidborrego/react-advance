import { NoLazy } from '@/01-lazyload';
import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface IRoute {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}

const LazyLoad = lazy(() => import('@/01-lazyload/layout/LazyLayout'));

export const routes: IRoute[] = [
  {
    Component: LazyLoad,
    name: 'LazyLayout - Dash',
    path: '/lazylayout/*',
    to: '/lazylayout',
  },
  {
    Component: NoLazy,
    name: 'no-lazy',
    path: 'nolazy',
    to: '/nolazy',
  },
];
