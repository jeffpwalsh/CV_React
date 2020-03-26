import React from 'react';

// COMPONENT IMPORTS
import Profile from './components/Profile'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
// REACTSTRAP IMPORT
import { Container, Card, Row, Col } from 'reactstrap';
//CSS STYLES IMPORT
import './App.css';

function App() {
  return (

    <div class="App">
    <Container fluid>
      <Row>
        <Col md="4">
          <Card className="aside">
            <Profile />
          </Card>
        </Col>
        {/* SECOND COLUMN */}
        <Col md="7">
          <Card className="section">
              <About />
              <Education />
              <Skills />
              <Experience />
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
