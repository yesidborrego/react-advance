import { ShoppingPage } from "@/02-component-patterns";
import { IRoutes } from "../interfaces/IRoutes";
import { About, Home, User } from "../01-lazyload";

export const routes: IRoutes[] = [
  {
    name: "Home",
    path: "home",
    to: "/home",
    Component: Home,
  },
  {
    name: "About",
    path: "about",
    to: "/about",
    Component: About,
  },
  {
    name: "Users",
    path: "users",
    to: "/users",
    Component: User,
  },
  {
    name: "Shopping",
    path: "shopping",
    to: "/shopping",
    Component: ShoppingPage,
  },
];
