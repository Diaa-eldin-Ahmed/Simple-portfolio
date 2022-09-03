/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import { Component } from "react";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
    constructor() {
        super();
        this.state = {
            skills: ["HTML", "CSS", "Bootstrap", "Javascript", "React"],
            projects: [
                {
                    name: "Project 1",
                    description: "This is project 1",
                    backgroundColor: "#f6f8f4",
                },
                {
                    name: "Project 2",
                    description: "This is project 2",
                    backgroundColor: "#c4cabe",
                },
                {
                    name: "Project 3",
                    description: "This is project 3",
                    backgroundColor: "#f6f8f4",
                },
                {
                    name: "Project 4",
                    description: "This is project 4",
                    backgroundColor: "#c4cabe",
                },
                {
                    name: "Project 5",
                    description: "This is project 5",
                    backgroundColor: "#f6f8f4",
                },
                {
                    name: "Project 6",
                    description: "This is project 6",
                    backgroundColor: "#c4cabe",
                },
            ],
            progressBar: [
                {
                    name: "HTML",
                    value: "90",
                },
                {
                    name: "CSS",
                    value: "95",
                },
                {
                    name: "Bootstrap",
                    value: "85",
                },
                {
                    name: "Javascript",
                    value: "90",
                },
                {
                    name: "React",
                    value: "80",
                },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <main>
                    <Hero />
                    <AboutMe />
                    <Skills
                        focus={this.state.skills}
                        progress={this.state.progressBar}
                    />
                    <Portfolio porto={this.state.projects} />
                    <Footer />
                </main>
            </div>
        );
    }
}

export default App;
