import React from 'react';
import UserContextProvider from 'Components/context';
import Header from './Components/Header';
import Router from './Components/Router';

function App() {
  return (
    <UserContextProvider>
        <Header/>
        <Router/>
    </UserContextProvider>
  )
}


export default App;
