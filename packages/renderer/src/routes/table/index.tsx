import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/table/')({
  component: () => {
    return <div>Generic table</div>;
  },
});
