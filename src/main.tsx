import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App.tsx';
import store from './redux/store';
import './normalize.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
