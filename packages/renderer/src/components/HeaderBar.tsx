import {Link} from '@tanstack/react-router';
import {Header, Link as TanLink} from 'react-aria-components';

export const HeaderBar = () => {
  return (
    <Header>
      <Link to="/">{() => <TanLink>Inicio</TanLink>}</Link>
    </Header>
  );
};
