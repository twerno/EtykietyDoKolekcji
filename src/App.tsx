import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Pages } from './pageBuilder/elements/ListaEtykiet/Pages';
import { store } from './state/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">

        <Pages />

        {/* <OriginalPages /> */}

      </div>
    </Provider>
  );
}

export default App;
