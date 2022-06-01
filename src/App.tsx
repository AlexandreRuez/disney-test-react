import React from 'react';
import './assets/styles/font.css';
import './assets/styles/App.css';
import PackagesPages from './pages/PackagesPage';
import OptionsPages from './pages/OptionsPage';
import { Routes, Route } from "react-router-dom";
import FormPage from './pages/FormPage';
import {GuardedRoute} from './utils/GuardedRoute';
import { useAppDispatch, useAppSelector } from "./utils/hooks"

function App() {
  const guards = useAppSelector(state => state.order.guards);
  return (
    <div id='app-layout'>
      <Routes>
        <Route path="/" element={<PackagesPages/>} />
        <Route
          path="/options"
          element={
            <GuardedRoute guard={guards.options}>
              <OptionsPages />
            </GuardedRoute>
          }
        />
        <Route
          path="/form"
          element={
            <GuardedRoute guard={guards.form}>
              <FormPage />
            </GuardedRoute>
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
