import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import reactLogo from '@/assets/react.svg';
import { routes } from '@/routes/';

export const Navigation = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={reactLogo} alt="React Logo" className="logo" />
        <ul>
          {routes.map(({ to, name }) => (
            <li key={to}>
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

      <main>
        <Routes>
          {routes.map(({ to, Component }) => (
            <Route path={to} element={<Component />} key={to} />
          ))}
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
};
