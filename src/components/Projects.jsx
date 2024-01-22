import React from 'react';

const Projects = () => {
    return (
        <section id="Projects">
        <div class="album py-5">
          <div class="container py-5 text-center">
            <h2 class="display-5 fw-bold  ">
              03. Things I've <span class="highlighted">Built</span>
            </h2>
            <hr />
          </div>
          <div class="container">
            <div class="row pt-5 pb-5">
              <h3 class="display-5 fw-bold  text-center">
                <span class="highlighted">Websites</span> I've Built
              </h3>
            </div>
            <div
              class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 pt-2 pb-2"
            >
             
            </div>
            <div class="row pt-5 pb-5">
              <h3 class="display-5 fw-bold  text-center">
                <span class="highlighted">Projects</span> I've Built
              </h3>
            </div>
            <div
              class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pt-2 pb-2"
            ></div>
          </div>
        </div>
      </section>
    );
};

export default Projects;