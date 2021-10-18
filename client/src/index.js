import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SessionStore from "./store/SessionStore";
import './index.css';


export const Context = createContext(null)


ReactDOM.render(
      <Context.Provider value={{
        session:new SessionStore()
      }}>
        <App />
      </Context.Provider>,
  document.getElementById('root')
);


