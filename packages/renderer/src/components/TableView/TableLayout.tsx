import {useParams} from '@tanstack/react-router';

export const TableLayout = () => {
  const {idTable} = useParams({from: '/table/$idTable'});
  return (
    <>
      <nav className="navbar h-6 border-b-2 border-solid border-secondary">{idTable}</nav>
      hopla
    </>
  );
};
