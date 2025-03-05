import React from 'react';
import { Card, MantineProvider, Tabs, List, Center, Button, Title, Image, AppShell, Container, Group, Text, Stack, TextInput} from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import headshot from './assets/Lumatic_HeadshotEdit.png';
import logo from './assets/MyGitHubProfile.png';
import { useParams } from 'react-router-dom';
import { generate } from './api';
import { useState } from 'react';


const Home: React.FC = () => {
  const URL = process.env.REACT_APP_URL;
  const [prompt, setPrompt] = useState("");
  const [response , setResponse] = useState("");
  const { key } = useParams<{key: string}>();
  if (key !== URL) {
    window.location.href = '/'
  } 

  const handleSubmit = async () => {
    if (prompt === "") {
      return;
    } else {
      const response = await generate(prompt);
      setPrompt("");
      response ? setResponse(response) : setResponse("");
    }
  }

  const handleButtonRedirect = (url : string) => {
    window.location.href = url;
  }
  
  return (
    <MantineProvider>   
      <AppShell
        header={{ height: '100px' }}
        padding="md"
        footer={{ height: '25px' }}
      >
      <AppShell.Header className="App-header">      
        <Title order={1}>Hi, my name is Ethan and this is my website!</Title>
      </AppShell.Header>
        <AppShell.Main>
            <Group justify="center">
              <Image h={400}
                w="auto"
                fit="contain" 
                src={headshot}/>
              <Center> 
                <Container w="550px" flex="auto" style={{ padding:'20px', borderRadius:"10px", backgroundColor: '#C0C0C0'}}>
                  <Stack>
                    <Title order={1}>Hi, I'm Ethan</Title> 
                    <Text> I'm currently pursuing a Computer Science BS at UIUC</Text>
                    <Text> I like skiing, video games, and F1</Text>
                    <Text> </Text>
                    <Text> </Text>
                  </Stack>
                </Container>
              </Center>   
            </Group>
            <Container w="550px" mt="20px" flex="auto" 
              style={{ 
                padding:'20px', 
                borderRadius:"10px", 
                borderColor:'#C0C0C0', 
                borderWidth: "2px", 
                borderStyle:"solid"}}>
              <Stack>
                <Text>
                  Gemini says :: {response} 
                </Text>
                <form onSubmit={handleSubmit}>
                  <TextInput 
                    label="Prompt" 
                    value={prompt} 
                    onChange={(event) => setPrompt(event.currentTarget.value) }/>
                  <Button type="submit" mt="md" fullWidth>Submit</Button>
                </form>
              </Stack>
            </Container>
            <Group justify='center' mt="20px">
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section flex="auto">
                  <Center>
                  <Image flex="auto" h='160px' w="auto" src={logo}/>
                  </Center>
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>GitHub Account</Text>
                </Group>
                <Button variant="outline" onClick={() => {handleButtonRedirect("https://github.com/EthM370")}}>
                    GitHub Link
                </Button>   
              </Card>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>LinkedIn Account</Text>
                </Group>
                <Button variant="outline" onClick={() => {handleButtonRedirect("https://www.linkedin.com/in/ethan-ma-8207a6327")}}>
                Linkedin Link
              </Button>
              </Card>
            </Group>
            <Container mt="20px" w="auto" style={{ height: '500px', alignItems: 'center', justifyContent: 'center', padding:"10px" }} >
              <Title order={3}>Resume:</Title>
              <Tabs color="teal" defaultValue="education">
                <Tabs.List justify="space-between">
                  <Tabs.Tab value="education">
                    Education
                  </Tabs.Tab>
                  <Tabs.Tab value="skill">
                    Technical Skill
                  </Tabs.Tab>
                  <Tabs.Tab value="experience">
                    Experience
                  </Tabs.Tab>
                  <Tabs.Tab value="pp">
                    Personal Project
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="education">
                EDUCATION
                  <List>
                    <List.Item>Supplementary Honors Project for CS124 </List.Item>
                    <List.Item>AP Physics C (Mechanics (5/5) + E&M (5/5)) AP Calculus BC (5/5) </List.Item>
                    <List.Item>Multivariable Calculus (extensive use of Wolfram Mathematica) </List.Item>
                    <List.Item>Current GPA: 3.95/4.00 </List.Item>
                  </List>
                </Tabs.Panel>
                <Tabs.Panel value="skill">
                TECHNICAL SKILLS  
                  <List>
                    <List.Item>Programming Language: Python, Java, TypeScript, SQL, Mathematica, C#</List.Item>
                    <List.Item>OS: Mac & Windows 11</List.Item>
                    <List.Item>Frameworks/Tools: Ollama, Git, Anaconda, VS Code, Gradio, Docker, Notebook LLM, HuggingFace, AWS SDK </List.Item>
                    <List.Item>Libraries: PyTorch, Openssl, Numpy, Sqlite3, OpenAI </List.Item>
                    <List.Item>Spoken Languages: Bilingual (English, Mandarin)</List.Item>
                  </List>
                </Tabs.Panel>
                <Tabs.Panel value="experience">
                EXPERIENCES
                  <List>
                    <List.Item>ACM Infra Committee Member 10/2024 - 
                      - Selected member of ACM Infrastructure committee focused on core-api development.
                      - Currently developing an unified ticketing and management system for ACM events, utilizing AWS lambda and dynamoDB</List.Item>
                    <List.Item>  SIAM MathWorks Math Modeling Challenge 03/2024
                      - Led a collaborative team of students in a high-pressure 12-hour competition,
                      - Delivered a comprehensive solution paper modeling the Seattle housing market and homelessness rates through continuous-time stochastic Wiener process.</List.Item>
                      - The project earned one of only 22 honorable mentions from 655 submissions, along with a $1,000 team award for excellence.
                    <List.Item> Competitive Quiz Bowl 07/2023 -
                      - Key member of a highly competitive Quiz Bowl team, securing second place in the prestigious IHSA-sponsored Scholastic Bowl State Championship. Best record in the recent 20 years of school history.
                      - Continuing my academic and competitive journey at UIUC</List.Item>
                    <List.Item>American Rocketry Challenge 08/2023 - 05/2024
                      - Designed, modeled, and constructed a class-E motor rocket alongside a close team of 5 fellow students
                      - Utilized CAD and undergo rigorous testing to improve launch accuracy and launch timing.
                      - Qualified for the ARC national finals as one of the top 100 teams out of 922.</List.Item>
                    <List.Item> Exemplary Student Research Program at Argonne National Laboratory 10/2022 - 5/2023
                      - Worked with Dr. Volker Rose and his team in investigating the properties and structure of perovskites.
                      - Analyzed experimental data acquired from the advanced photon source (APS) at Argonne.
                      - Produced research posters and shared findings in major research conventions to fellow student researchers.</List.Item>
                  </List>
                </Tabs.Panel>
                <Tabs.Panel value="pp">
                PERSONAL PROJECTS
                    <List>
                      <List.Item>QuizBowl AI Chatbot 07/24 -
                        - Experimenting with Retrieval Augmented Generation to produce properly formatted quiz bowl questions.
                        - Utilizing current models like ChatGPT4, Google Gemini, and Claude for generation and cross verification.
                        - Engineered prompts and Chain of Thought design paradigm to eliminate model hallucination and establish guard rail .
                        - Planned fine tuning using crowd-sourced difficulty assessments..</List.Item>
                      <List.Item>CS124 Honors Project 09/24 -
                        - Developed Unity-based dungeon exploration game with integrated graphics and control.
                        - Planned and worked alongside a close team of 4 fellow students, have weekly meetings to discuss progress and weekly targets. </List.Item>
                      <List.Item> This Website !!!</List.Item>
                    </List>
                </Tabs.Panel>
              </Tabs>
            </Container>
            
        </AppShell.Main>
        <AppShell.Footer >
            <Center color='black'>
              Made with ReactApp | Hosted through Github Pages
            </Center>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
    );
}

export default Home;