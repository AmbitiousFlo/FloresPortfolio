import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Task Master',
    imageSrc: '/assets/taskmaster.png',
    link: 'https://taskmaster-grp3-ef54a6c054dc.herokuapp.com/',
  },
  {
    title: 'Sports Trivia',
    imageSrc: '/assets/sportstrivia.png',
    link: 'https://ambitiousflo.github.io/Sports-Trivia/',
  },
  {
    title: 'Weather Dashboard',
    imageSrc: '/assets/weatherdashboard.png',
    link: 'https://ambitiousflo.github.io/WeatherDashboard/',
  },
  {
    title: 'Project 4',
    description: 'Coming Soon!',
    imageSrc: '/assets/comingsoon.png',
    link: 'https://example.com/project4',
  },
  {
    title: 'Project 5',
    description: 'Coming Soon!',
    imageSrc: '/assets/comingsoon.png',
    link: 'https://example.com/project5',
  },
];

export default function Home() {
  return (
    <Container>
      <h1 className="text-center mt-5">Developer Portfolio</h1>
      <Row className="mt-4">
        {projects.map((project, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <a href={project.link} className="project-link">
              <Card className="custom-card">
                <Card.Img variant="top" src={project.imageSrc} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  {project.description && <Card.Text>{project.description}</Card.Text>}
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
