import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Main from './Main';

import { setupStore } from '../../redux/store';

import { firebaseConfig } from '../../constants/firebase';

import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

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
