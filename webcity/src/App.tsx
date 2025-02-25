import React from 'react';
import logo from './image.png';
import { MantineProvider, Group, List, Skeleton, Button, Title, SimpleGrid, Flex, AppShell, Container, Center, Box} from '@mantine/core';
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
      <div className="App-container">
        <AppShell.Main>
          <Title order={2}>I'm currently pursuing a Computer Science degree at UIUC</Title> 
            <Container> 
              <Title order={4}> Contact me at: ethanma4@illinois.edu / 630-888-8209 </Title>
            </Container>
            <List>

            Related Coursework
            Supplementary Honors Project for CS124 AP Physics C (Mechanics (5/5) + E&M (5/5)) Multivariable Calculus (extensive use of Wolfram Mathematica) AP Statistic (5/5)
            Current GPA: 3.95/4.00 AP Calculus BC (5/5) 
            
            TECHNICAL SKILLS  
            - Programming Language: Python, Java, TypeScript, SQL, Mathematica, C#
            - OS: Mac & Windows 11
            - Frameworks/Tools: Ollama, Git, Anaconda, VS Code, Gradio, Docker, Notebook LLM, HuggingFace, AWS SDK
            - Libraries: PyTorch, Openssl, Numpy, Sqlite3, OpenAI
            - Spoken Languages: Bilingual (English, Mandarin)

            EXPERIENCE
            ACM Infra Committee Member 10/2024 -
            - Selected member of ACM Infrastructure committee focused on core-api development.
            - Currently developing an unified ticketing and management system for ACM events, utilizing AWS lambda and dynamoDB
            SIAM MathWorks Math Modeling Challenge 03/2024
            - Led a collaborative team of students in a high-pressure 12-hour competition,
            - Delivered a comprehensive solution paper modeling the Seattle housing market and homelessness rates through continuous-time
            stochastic Wiener process.
            - The project earned one of only 22 honorable mentions from 655 submissions, along with a $1,000 team award for excellence.
            Competitive Quiz Bowl 07/2023 -
            - Key member of a highly competitive Quiz Bowl team, securing second place in the prestigious IHSA-sponsored Scholastic Bowl State Championship. Best record in the recent 20 years of school history.
            - Continuing my academic and competitive journey at UIUC
            American Rocketry Challenge 08/2023 - 05/2024
            - Designed, modeled, and constructed a class-E motor rocket alongside a close team of 5 fellow students
            - Utilized CAD and undergo rigorous testing to improve launch accuracy and launch timing.
            - Qualified for the ARC national finals as one of the top 100 teams out of 922.
            Exemplary Student Research Program at Argonne National Laboratory 10/2022 - 5/2023
            - Worked with Dr. Volker Rose and his team in investigating the properties and structure of perovskites.
            - Analyzed experimental data acquired from the advanced photon source (APS) at Argonne.
            - Produced research posters and shared findings in major research conventions to fellow student researchers.
            
            Personal Project
            QuizBowl AI Chatbot 07/24 -
            - Experimenting with Retrieval Augmented Generation to produce properly formatted quiz bowl questions.
            - Utilizing current models like ChatGPT4, Google Gemini, and Claude for generation and cross verification.
            - Engineered prompts and Chain of Thought design paradigm to eliminate model hallucination and establish guard rail .
            - Planned fine tuning using crowd-sourced difficulty assessments..
            CS124 Honors Project 09/24 -
            - Developed Unity-based dungeon exploration game with integrated graphics and control.
            - Planned and worked alongside a close team of 4 fellow students, have weekly meetings to discuss progress and weekly targets.
            </List>
            <Button className="linkButton" onClick={() => {handleButtonRedirect("https://github.com/EthM370")}}>
              GitHub Link
            </Button>    
            <Button className="linkButton" onClick={() => {handleButtonRedirect("https://www.linkedin.com/in/ethan-ma-8207a6327")}}>
              Linkedin Link
            </Button>
        </AppShell.Main>
        </div>
      </AppShell>
    </MantineProvider>
    );
}

export default App;
