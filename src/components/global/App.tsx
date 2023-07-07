import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { firebaseConfig } from '../../constants/firebase';

import '../../App.css';
import 'react-toastify/dist/ReactToastify.css';
import { setupStore } from '../../redux/store';
import Main from './Main';
import { initializeApp } from 'firebase/app';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

const store = setupStore();
const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
