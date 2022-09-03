/* eslint-disable react/style-prop-object */

const Skills = (props) => {
    let skills = props.focus.map((skill, index) => {
        return <li key={index}>{skill}</li>;
    });
    let progressBar = props.progress.map((progress, index) => {
        return (
            <div className="progress my-1 progressBar">
                <div
                    style={{
                        width: `${progress.value}%`,
                        backgroundColor: "#89997a",
                    }}
                    key={index}
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={progress.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {progress.name}
                </div>
            </div>
        );
    });
    return (
        <div className="background">
            <div className="container my-5 pb-5">
                <div className="row">
                    <div className="mx-auto my-5">
                        <h2 className="my-5 fs-1">Skills</h2>
                        <p className="text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatum, sapiente nostrum? Qui, atque
                            corrupti voluptatum nam odit optio illo eius fugit
                            adipisci dolor impedit earum mollitia temporibus
                            vero nemo totam.Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Voluptatum, sapiente
                            nostrum? Qui, atque corrupti voluptatum nam odit
                            optio illo eius fugit adipisci dolor impedit earum
                            mollitia temporibus vero nemo totam.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-3 fs-2">
                        <div>
                            <div className="myFocus text-start">My Focus</div>
                            <hr />
                            <div className="myFocus text-center fs-md-3">
                                <ul>{skills}</ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 mx-auto">
                        <div className="text-start">
                            <div className="myFocus fs-2">My Progress</div>
                            <hr />
                            <div className="myFocus">{progressBar}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;
