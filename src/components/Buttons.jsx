import './Buttons.css'
import {Link} from 'react-router-dom'
function Buttons() {
    return(
        <div className="button-row">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            
        </div>
        
    );
}

export default Buttons