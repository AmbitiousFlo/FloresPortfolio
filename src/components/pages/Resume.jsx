import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap Card and Button components

export default function Resume() {
  const resumeURL = '/path-to-your-resume.pdf'; // Replace with the actual path to your resume PDF

  return (
    <div className="container mt-5">
      <h1>My Resume</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/path-to-your-resume-preview-image.jpg" alt="Resume Preview" />
        <Card.Body>
          <Card.Title>Preview</Card.Title>
          <Card.Text>
            Here's a preview of my resume. Click the button below to download the full version.
          </Card.Text>
          <Button variant="primary" href={resumeURL} download="your-resume.pdf">
            Download Resume
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
