import './Buttons.css'

import {Link} from 'react-router-dom'
function Buttons() {
    return(
        <div className="button-row">
            <div className="title">
                <h1>Portfolio</h1>
            </div>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Buttons