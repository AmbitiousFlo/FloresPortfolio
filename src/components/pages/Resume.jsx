import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap Card and Button components
import '../css/resume.css'; // Create a CSS file for styling

export default function Resume() {
  const resumeURL = 'assets/resume.pdf'; // Replace with the actual path to your resume PDF

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="resume-card">
        <h1>My Resume</h1>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="assets/resumeimg.png" alt="Resume Preview" />
          <Card.Body>
            <Card.Title>Preview</Card.Title>
            <Card.Text>
              Here's a preview of my resume. Click the button below to download the full version.
            </Card.Text>
            <Button variant="primary" href={resumeURL} download="Christian's Resume">
              Download Resume
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
