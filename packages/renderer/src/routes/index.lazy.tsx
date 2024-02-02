import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: aa => {
    console.log(aa);
    return <div>home</div>;
  },
});
