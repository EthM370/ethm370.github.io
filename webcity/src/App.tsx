import React from 'react';
import logo from './logo.svg';
import { Flex, MantineProvider, Box, Button} from '@mantine/core';
import Navbar from "./Navbar"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MantineProvider>
          <img src={logo} className="App-logo" alt="logo" />
          <Box>
              Hi, my name is Ethan and I'm currently pursuing a computer science degree at UIUC
          </Box>
          <Box maw="1000px" style={{ display: 'flex', gap: '16px'}}>
              
              <a
                className="App-link"
                href="https://github.com/EthM370"
                target="_blank"
                rel="noopener noreferrer"
              >
                github Link
              </a>
              <a
                className="App-link"
                href="https://www.linkedin.com/in/ethan-ma-8207a6327"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin Link
              </a>
          </Box>
        </MantineProvider>
      </header>
    </div>
  );
}

export default App;
