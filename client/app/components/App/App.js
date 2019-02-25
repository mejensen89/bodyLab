import React, { Component } from 'react';
import Home from "../Home/Home";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TimerDisplay from '../timerDisplay/TimerDisplay';
import Editor from '../Editor/Editor'

const App = ({ children }) => (
  <>
    <Header />

    <main>
      <Home />
      <h1 className="centered"> Welcome to Body Lab </h1>
      <TimerDisplay />
    </main>

    <Footer />
  </>
);

export default App;
