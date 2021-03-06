import profile from "../../assets/img/Profile.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const About = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div id="site-about">
      <div className="container">
        <div className="row" style={{ height: "60%" }}>
          <div
            className="col-sm-6"
            style={{ textAlign: "center" }}
            data-aos={width > 768 ? "fade-right" : "fade-up"}
          >
            <img
              src={profile}
              className="site-about__image"
              alt="Profile.png"
            />
          </div>
          <div
            className="col-sm-6 site-about__content"
            data-aos={width > 768 ? "fade-left" : "fade-up"}
          >
            <div className="site-about__body">
              <h2>About Me</h2>
              <p>
                {props.data ? props.data.paragraph : "Loading..."}{" "}
                <a
                  href={props.data ? props.data.link[1] : "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props.data ? props.data.link[0] : "Loading..."}
                </a>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div className="btn-container" style={{ marginTop: 10 }}>
                <a className="btn btn-custom" href="/#/about">
                  Read More
                </a>
              </div>
              <div className="btn-container" style={{ marginTop: 10 }}>
                <a className="btn btn-custom" href="/#/portfolio">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
