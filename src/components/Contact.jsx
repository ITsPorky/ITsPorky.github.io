import React from 'react';

const Contact = () => {
    return (
        <div id="Contact" className="container mt-5">
      <h2 className="display-5 fw-bold text-center  ">
        04. My <span className="highlighted">Details</span>
      </h2>
      <hr />
      <footer className="pt-3 mt-4">
        <p className="text-center text-muted">
          Email:
          <a
            href="mailto:wc.walsh16@gmail.com"
            className="link-secondary "
            > wc.walsh16@gmail.com</a>
        </p>
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://github.com/ITsPorky"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted "
              ><i className="fa-brands fa-github"></i> Github</a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/wade-walsh/"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted "
              ><i className="fa-brands fa-linkedin"></i> Linkedin</a>
          </li>
        </ul>
        <div className="pt-5">
          <p className="text-center text-muted">© 2024 Wade Walsh</p>
        </div>
      </footer>
    </div>
    );
};

export default Contact;