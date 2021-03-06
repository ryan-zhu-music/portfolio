import jsonData from "../data/home_data.json";

export const Footer = () => {
  const footerLinks = jsonData.Footer;

  return (
    <footer id="site-footer" className="footer">
      <div className="container">
        <div className="row site-footer__row">
          <div className="col-sm-2">
            <a href="/">
              <img
                src={require("../assets/img/logo-white.png").default}
                className="site-footer__logo"
                alt="RZ"
              />
            </a>
          </div>
          <nav className="col-sm-5">
            <ul className="nav navbar-nav site-footer__items">
              <li>
                <a href="/" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="/#/about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="/#/music" className="page-scroll">
                  Music
                </a>
              </li>
              <li>
                <a href="/#/portfolio" className="page-scroll">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/#/contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-sm-5 site-footer__social">
            <a
              href={footerLinks ? footerLinks.facebook : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href={footerLinks ? footerLinks.twitter : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href={footerLinks ? footerLinks.instagram : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href={footerLinks ? footerLinks.discord : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-discord fa-2x"></i>
            </a>
            <a
              href={footerLinks ? footerLinks.linkedin : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href={footerLinks ? footerLinks.github : "/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
