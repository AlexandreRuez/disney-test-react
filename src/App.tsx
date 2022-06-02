import React from 'react';
import './assets/styles/font.css';
import './assets/styles/App.css';
import PackagesPages from './pages/PackagesPage';
import OptionsPages from './pages/OptionsPage';
import { Routes, Route } from "react-router-dom";
import FormPage from './pages/FormPage';
import {GuardedRoute} from './utils/GuardedRoute';
import { useAppSelector } from "./utils/hooks"
import ReviewPage from './pages/ReviewPage';
import ConfirmPage from './pages/ConfirmPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const guards = useAppSelector(state => state.order.guards);
  return (
    <div id='app-layout'>
      <Header/>
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
        <Route
          path="/review"
          element={
            <GuardedRoute guard={guards.form}>
              <ReviewPage />
            </GuardedRoute>
          }
        />
        <Route
          path="/confirm"
          element={
            <GuardedRoute guard={guards.form}>
              <ConfirmPage />
            </GuardedRoute>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
