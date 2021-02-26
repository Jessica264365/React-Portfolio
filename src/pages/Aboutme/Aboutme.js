import React from "react";
import me from "./me.jpg"
import "./Aboutme.css"

function AboutMe() {
  return (
    <main class="container mt-4">
      <section class="row">
        <div class="col-lg-7 col-md-7 col-xs-12 about">
          <h1>About me</h1>
          <hr />
          <img
            src={me}
            class="aboutme"
            alt="A head shot of myself"
          />
          <p>
            I am a West Seattleite who loves dogs, absurdist fiction books, and
            caffeine. I am a dedicated team player who is ready to dive right
            into the web development world. Before entering the web development
            field, I was a coffee shop manager for many years. So, I am
            experienced with time management and team management. I enjoy
            creating responsive full stack applications with the skills I have
            acquired. I have a constant drive to learn about new technologies.
            My ideal job would involve doing something new every day which is
            why this industry thrills me so much. I will be a great addition to
            any company looking for someone who strives to grow as a web
            developer every day. Please give my portfolio and resume a peek.
          </p>
          <div class="row justify-content-center">
            <a
              class="mx-3"
              target="_blank"
              href="mailto:jwhitman135@outlook.com"
              aria-label="Email"
            >
              <i
                class="fa fa-envelope fa-3x"
                aria-hidden="true"
                data-toggle="tooltip"
                data-original-title="Email"
              ></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/Jessica264365"
              class="mx-3"
              data-toggle="tooltip"
              data-original-title="GitHub"
            >
              <i class="fa fa-github fa-3x" aria-hidden="true"></i>
            </a>
            <a
              class="mx-3"
              target="_blank"
              href="https://www.linkedin.com/in/jessica-whitman-9529301bb/"
              aria-label="LinkedIn"
              data-toggle="tooltip"
              data-original-title="LinkedIn"
            >
              <i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            <a
              class="mx-3 mb-1"
              target="_blank"
              href="./assets/resume.pdf"
              aria-label="Resume"
              data-toggle="tooltip"
              data-original-title="Resume"
            >
              <i class="fa fa-file-text fa-3x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
export default AboutMe;
