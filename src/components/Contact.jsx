import React from 'react';

const Contact = () => {
    return (
        <div id="Contact" class="container mt-5">
      <h2 class="display-5 fw-bold text-center  ">
        04. My <span class="highlighted">Details</span>
      </h2>
      <hr />
      <footer class="py-3 my-4">
        <p class="text-center text-muted">
          Email:
          <a
            href="mailto:wc.walsh16@gmail.com"
            class="link-secondary "
            > wc.walsh16@gmail.com</a>
        </p>
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a
              href="https://github.com/ITsPorky"
              target="_blank"
              class="nav-link px-2 text-muted "
              ><i class="fa-brands fa-github"></i> Github</a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/wade-walsh/"
              target="_blank"
              class="nav-link px-2 text-muted "
              ><i class="fa-brands fa-linkedin"></i> Linkedin</a>
          </li>
        </ul>
        <p class="text-center text-muted">© 2024 Wade Walsh</p>
      </footer>
    </div>
    );
};

export default Contact;