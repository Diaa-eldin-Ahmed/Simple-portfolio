/* eslint-disable react/jsx-no-undef */

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="container my-5">
                <div className="row " style={{ height: "300px" }}>
                    <div className="col-4 m-auto">
                        <h1>About Me</h1>
                    </div>
                    <div className="col-8 m-auto">
                        <p className="d-flex text-start text-justify">
                            I am a full stack developer with a passion for
                            creating beautiful and functional websites. I have a
                            background in business and a passion for learning
                            new technologies. I am a full stack developer with a
                            passion for creating beautiful and functional
                            websites. I have a background in business and a
                            passion for learning new technologies.
                        </p>
                        <button className="d-flex btn btn-outline-dark cvBtn">
                            <a href="./assets/Diaa Ahmed Frontend.pdf" download>
                                <i
                                    className="fa-solid fa-address-card me-2 text-center"
                                    style={{ fontSize: "20px" }}
                                ></i>
                                Download CV
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;
