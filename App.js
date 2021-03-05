import React from 'react';
import Providers from './src/navigation/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <Providers />
    </Provider>

  );
};


export default App;
