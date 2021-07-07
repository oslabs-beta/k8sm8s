import React, { useState, useEffect } from 'react';

import Errors from './components/errors/Errors';
import Pods from './components/pods/Pods';
import Splash from './components/splash/Splash';

import './styles/app.css';

// TODO: after MVP, convert React Class Components to Hooks.
// TODO: after MVP, try out Typescript.

const App = () => {
  const [
    isSplashShowing,
    setIsSplashShowing
  ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashShowing(false);
    }, 1300);
  }, []);

  if (isSplashShowing) {
    return (
      <Splash />
    )
  }

  return (
    <>
    <div id="app-header">
          <h1>Kubiquity</h1>
          <p>An error logging and visualization tool for Kubernetes.</p>
      </div>
        <div id="app-container">
      <Errors />
      <Pods />
    </div>
    </>
  )
};

export default App;
