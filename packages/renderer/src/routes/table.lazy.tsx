import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/table')({
  component: () => {
    return <div>table</div>;
  },
});
