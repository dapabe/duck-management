import {createRoot} from 'react-dom/client';
import {App} from './App';

const domNode = document.getElementById('app')!;

createRoot(domNode).render(<App />);
