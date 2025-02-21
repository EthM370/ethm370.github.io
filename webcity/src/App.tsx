import React from 'react';
import logo from './image.png';
import { MantineProvider, Box, Button, Title, SimpleGrid} from '@mantine/core';
import Navbar from "./Navbar"
import './App.css';
import { redirect } from 'react-router-dom';

function App() {
  const handleButtonRedirect = (url : string) => {
    window.location.href = url;
  } 
    
  return (
    <MantineProvider>
      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Box style={{margin: "16px", maw:"500px", alignContent:'center'}}>
        <Title order={1}>Hi, my name is Ethan and this is my website!</Title>
        <Title order={2}>I'm currently pursuing a computer science degree at UIUC </Title>
          
        <SimpleGrid cols={1}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </SimpleGrid>
        <Button className="linkButton" onClick={() => {handleButtonRedirect("https://github.com/EthM370")}}>
          GitHub Link
          </Button>    
        <Button className="linkButton" onClick={() => {handleButtonRedirect("https://www.linkedin.com/in/ethan-ma-8207a6327")}}>
          Linkedin Link
        </Button>      
      </Box>
    </MantineProvider>
  );
}

export default App;
