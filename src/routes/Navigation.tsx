import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '@/assets/react.svg';
import { routes } from './routes';
import { Suspense } from 'react';
import { Spinner } from '@/01-lazyload';

export const Navigation = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <div className="img-logo-react">
              <img src={logo} alt="React Logo" />
            </div>
            <ul>
              {routes.map(({ name, to }) => (
                <li key={name}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
