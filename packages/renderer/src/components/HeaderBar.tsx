import {Link} from '@tanstack/react-router';
import {Header, Link as TanLink} from 'react-aria-components';

export const HeaderBar = () => {
  return (
    <Header className="navbar border-b-2 border-solid border-secondary">
      <Link to="/">{() => <TanLink>Inicio</TanLink>}</Link>
    </Header>
  );
};
