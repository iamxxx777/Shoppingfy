import { Link } from "react-router-dom"
import Image from "../../assets/404.svg"
import "./404.css"

const NotFound = () => {
    return (
        <div className="notFound_container">
            <div className="notFound-page">
                <div className='err-text'>
                    <h2>404 Not Found</h2>
                    <h4>This doesn't happen often</h4>
                    <p>
                    We try our best to avoid this kind of occurence. The page you are trying to find does not exist or has been removed by the administrator.
                    Click <Link to="/items">here</Link> to go to the homepage.
                    </p>
                </div>
                <div className="err-image">
                    <img src={Image} alt="404 Not found" />
                </div>
            </div>
        </div>
    )
}

export default NotFound
