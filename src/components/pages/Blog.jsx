import React from 'react';

export default function Home() {
  return (
    <div className="card-group">
      <section className="left-side" id="Projects">
        <h1 className="title">Projects</h1>
        <section className="section-container">
          <section id="image1">
            <a href="https://ambitiousflo.github.io/Sports-Trivia/">
              <img
                src="./assets/images/Screenshot 2023-08-01 193531.png"
                alt="Sports-Trivia"
                id="p1"
              />
            </a>
            <h3>Sports Trivia</h3>
          </section>
          <div className="card">
            <a href="https://taskmaster-grp3-ef54a6c054dc.herokuapp.com/login">
              <img
                src="./assets/images/Screenshot 2023-10-02 013249.png"
                className="card-img-top"
                alt="..."
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Task Master</h5>
              <p className="card-text">
                Task Master is a web application that simplifies task
                management. It provides a user-friendly interface for creating,
                editing, updating, and deleting tasks, helping you stay
                organized and focused on the most important tasks that need to
                be done.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <section className="card">
            <img src="https://placehold.co/600x400" alt="" />
            <h3>image</h3>
          </section>
          <section className="card">
            <img src="https://placehold.co/600x400" alt="" />
            <h3>image</h3>
          </section>
          <section className="card">
            <img src="https://placehold.co/600x400" alt="" />
            <h3>image</h3>
          </section>
          <section className="card">
            <img src="https://placehold.co/600x400" alt="" />
            <h3>image</h3>
          </section>
        </section>
      </section>
    </div>
  );
}
