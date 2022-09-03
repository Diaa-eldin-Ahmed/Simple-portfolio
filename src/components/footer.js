/* eslint-disable no-unused-vars */
import ContactMe from "./contactMe";
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4 text-md-start footerMob">
                            <h5 className="text-white mb-1">Get in Touch</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="mailto:diaa.aboelela@gmail.com"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            marginBottom: "1vh",
                                        }}
                                    >
                                        <i className="fa fa-envelope pe-3"></i>
                                        diaa.aboelela@gmail.com
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="tel:+201098989898"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <i className="fa fa-phone pe-3"></i>
                                        Call Me: +201098989898
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mx-auto mb-3">
                            <ContactMe />
                        </div>
                        <div className="col-md-4 mx-auto">
                            <h6>
                                <i class="fa-solid fa-copyright pe-3"></i>
                                2022 Diaa Ahmed Aboelela
                            </h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/diaa-aboelela-b9a8b817b/"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <i class="fa-brands fa-linkedin pe-3"></i>
                                        linkedin.com/in/diaa-ahmed-aboelela
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pt-2">
                            <small className="text-muted">
                                Made with{" "}
                                <i
                                    class="fa-solid fa-heart"
                                    style={{ color: "red" }}
                                ></i>{" "}
                                By Diaa Ahmed
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
