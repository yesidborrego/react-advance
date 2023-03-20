import { LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoutes {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}
