import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';

const element = document.getElementById('app')
if(element === null){
  throw new Error('Missing element with id equals to app.')
}
const root = createRoot(element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);