import {createLazyFileRoute} from '@tanstack/react-router';
import {TableLayout} from '../../components/TableView/TableLayout';

export const Route = createLazyFileRoute('/table/$idTable')({
  component: TableLayout,
});
