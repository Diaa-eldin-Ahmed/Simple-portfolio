/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
// header component
import image from "../assets/diaa.JPG";
import ContactMe from "./contactMe";
const Hero = () => {
    return (
        <div className="background d-flex ">
            <div className="container my-5">
                <div className="row my-4">
                    <div className="row col-6">
                        <div className="m-auto">
                            <h1>Diaa Ahmed</h1>
                            <p className="mb-4 fs-5">Frontend developer</p>
                            <ContactMe />
                        </div>
                    </div>
                    <img
                        className="w-50 me-3 col-8 rounded-5"
                        src={image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
export default Hero;
