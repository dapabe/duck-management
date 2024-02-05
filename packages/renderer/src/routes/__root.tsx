import {createRootRoute, Navigate, Outlet} from '@tanstack/react-router';
import {HeaderBar} from '../components/HeaderBar';

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen flex flex-col">
      <HeaderBar />
      <Outlet />
    </div>
  ),
  notFoundComponent: () => <Navigate to="/" />,
});
