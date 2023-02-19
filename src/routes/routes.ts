import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "@/01-lazyload";

type JSXComponent = () => JSX.Element;

interface IRoute {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}

const Lazy1 = lazy(() => import("@/01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("@/01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("@/01-lazyload/pages/LazyPage3"));

export const routes: IRoute[] = [
  {
    Component: Lazy1,
    name: "Lazy-1",
    path: "lazy1",
    to: "/lazy1",
  },
  {
    Component: Lazy2,
    name: "Lazy-2",
    path: "lazy2",
    to: "/lazy2",
  },
  {
    Component: Lazy3,
    name: "Lazy-3",
    path: "lazy3",
    to: "/lazy3",
  },
];
