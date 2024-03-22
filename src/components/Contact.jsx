import React from 'react';

const Contact = () => {
    return (
      <div id="Contact" className="section-padding container mt-5">
      <h2 className="display-5 fw-bold text-center  ">
        04. My <span className="highlighted">Details</span>
      </h2>
      <hr />
      <footer className="pt-3 mt-4">
        <div className="container">
          <div className="row">
              {/* <h3 className="text-center">Get in contact</h3> */}
              <p className="text-center">Feel free to reach out and get in contact with me via the following:</p>
              <p className="text-center">
                Email:
                <a
                  href="mailto:wc.walsh16@gmail.com"
                  > wc.walsh16@gmail.com</a>
              </p>
              <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item">
                  <a
                    href="https://github.com/ITsPorky"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link px-2"
                    ><i className="fa-brands fa-github"></i> Github</a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.linkedin.com/in/wade-walsh/"
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link px-2"
                    ><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                </li>
              </ul>
          </div>
        </div>
        <div className="pt-5">
          <p className="text-center text-muted">© 2024 Wade Walsh</p>
        </div>
      </footer>
    </div>
    );
};

export default Contact;