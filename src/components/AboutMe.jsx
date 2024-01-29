import React from 'react';

const AboutMe = () => {
  return (
    <section id="About" Style="padding-top: 90px">
        <div className="container px-4 py-5 section-padding text-center">
          <img
            className="d-block mx-auto mb-4 img rounded-image"
            Style="max-width: 350px;"
            src="assets/images/Wade-Portrait.jpg"
            width="350"
            height="350"
            alt="Wade Walsh"
          />
          <h1 className="display-5 fw-bold  ">
            Hi, I'm <span className="highlighted">Wade Walsh</span>
          </h1>
          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4">
              I am a Web/ Software Developer. I have an eagerness and passion
              for developing software, creating websites, writing code, learning
              and developing skills and knowledge that will benefit my career in
              the industry. I enjoy trying out new technologies and trying new
              things while I aim to continue developing my skillset.
            </p>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;