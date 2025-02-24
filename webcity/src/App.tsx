import React from 'react';
import logo from './image.png';
import { MantineProvider, Group, Burger, Skeleton, Button, Title, SimpleGrid, Flex, AppShell, Container, Center} from '@mantine/core';
import './App.css';


function App() {
  const handleButtonRedirect = (url : string) => {
    window.location.href = url;
  } 
    
  return (
    <MantineProvider>
      <AppShell
        header={{ height: '10px'}}
        navbar={{
          width: 300,
          breakpoint: 'sm',
        }}
        padding="md"
      >
      <AppShell.Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title order={1}>Hi, my name is Ethan and this is my website!</Title>
      </AppShell.Header>
        <AppShell.Main>
          <Center maw='500px' color='var(--mantine-color-blue-light)' mx="auto" 
            style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flex:"column"}}
          >
            <Title order={2}>I'm currently pursuing a Computer Science degree at UIUC </Title>   
          </Center>  
          <Center maw='500px' color='var(--mantine-color-blue-light)' mx="auto" 
            style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flex:"column"}}
          >
            <Title order={4}> Contact me at: ethanma4@illinois.edu / 630-888-8209 </Title>
          </Center>
          <Center maw='500px' color='var(--mantine-color-blue-light)' mx="auto" 
            style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flex:"column"}}
          >
            <Button className="linkButton" onClick={() => {handleButtonRedirect("https://github.com/EthM370")}}>
              GitHub Link
            </Button>    
            <Button className="linkButton" onClick={() => {handleButtonRedirect("https://www.linkedin.com/in/ethan-ma-8207a6327")}}>
              Linkedin Link
            </Button>
          </Center>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
    );
}

export default App;
