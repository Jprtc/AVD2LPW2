import { GlobalStyle } from './styles/global';
// import Modal from 'react-modal'
import { Header } from './components/Header';
import {Dashboard } from './components/Dashboard';

export function App(){

  

  return(
    <div className="App">
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </div>
  );
}