import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element= {<Login />} />
          <Route path="*" element= {<h1>Página não encontrada!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  ); 
}

export default App;
