import React from 'react';
import MainRoute from './src/navigation/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <MainRoute />
    </Provider>

  );
};


export default App;
