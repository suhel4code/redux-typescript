import React from 'react';
import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';

import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <h1>Packages</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
