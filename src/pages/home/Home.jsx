import "./Home.css"
import person from '../../assets/person.jpg'
function Home() {
    return(
        <div className="about-grid">
            <div className="text">
                <div className="name">
                    <h1>Rowan Stovin</h1>
                </div>
                <ul>
                    <li>Computer Science and Mathematics</li>
                    <li>Student at University of Victoria</li>
                    <li>Graduating in 2028</li>

                </ul>
                
            </div>
            <img src={person} alt="Person"/>
        </div>
    )
    
}

export default Home