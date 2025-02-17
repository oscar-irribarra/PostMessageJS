import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CounterPage } from './pages/CounterPage.tsx';
import { NavBar } from './components/NavBar.tsx';
import { TodoPage } from './pages/TodoPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/todo' element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
