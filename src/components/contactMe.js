// const ContactMe = () => {
//     return (
//         <button className="d-flex btn btn-outline-light">
//             <a href="./assets/Diaa Ahmed Frontend.pdf">Contact Me</a>
//         </button>
//     );
// };
// export default ContactMe;

import Button from "react-bootstrap/Button";

function contactMe() {
    return (
        <>
            <Button variant="outline-light">Contact Me</Button>{" "}
        </>
    );
}

export default contactMe;
