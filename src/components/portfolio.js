/* eslint-disable jsx-a11y/img-redundant-alt */

const Portfolio = (props) => {
    let projects = props.porto.map((project, index) => {
        return (
            <div className="col-md-4" key={index}>
                <div
                    className="card mb-4 box-shadow"
                    style={{
                        height: "200px",
                        backgroundColor: project.backgroundColor,
                    }}
                >
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.description}</p>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">Portfolio</h1>
                        </div>
                    </div>
                    <div className="row">{projects}</div>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;
