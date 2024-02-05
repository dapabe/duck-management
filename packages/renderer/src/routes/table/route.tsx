import {Link, Outlet, createFileRoute} from '@tanstack/react-router';
import {Tab, TabList, TabPanel, Tabs} from 'react-aria-components';

export const Route = createFileRoute('/table')({
  component: () => {
    return (
      <Tabs
        selectedKey={'/table/'}
        orientation="vertical"
        className="flex-grow flex"
      >
        <TabList
          aria-label="Tabs"
          className="flex flex-col space-y-1 max-w-[16ch] px-2 py-1 border-solid border-r-2 border-secondary"
        >
          <Tab
            id="/table/123"
            className="truncate"
          >
            <Link
              to="/table/$idTable"
              params={{idTable: '123'}}
            >
              Empleados
            </Link>
          </Tab>
        </TabList>
        <TabPanel
          id="/table/"
          className="flex-grow"
        >
          <Outlet key={'/table/'} />
        </TabPanel>
      </Tabs>
    );
  },
});
