import {createRootRoute, Outlet} from '@tanstack/react-router';
import {HeaderBar} from '../components/HeaderBar';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <HeaderBar />
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
