import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Products from './components/Products';
import Contacts from './components/Contacts';


const Applayout = () => {
  return (
<>
<Header />
<Body/>
<Products/>
<Contacts/>
</>
    
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Applayout />
  </React.StrictMode>,
  document.getElementById('root')
);
export default Applayout;
