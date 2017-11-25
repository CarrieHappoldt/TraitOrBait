import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import LandingPage from "./components/LandingPage/LandingPage"

function App() {
  return (
    <div>
      <Button raised color="primary">
        Hello World
      </Button>
      <LandingPage />
    </div
>  );
}

export default App;
