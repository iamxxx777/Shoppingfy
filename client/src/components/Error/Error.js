import "./error.css"
import Image from "../../assets/error.svg"

const Error = () => {
    return (
        <div className="err_container">
            <div className="err_page">
                <div className='err-text'>
                    <h2>Server Error</h2>
                    <h4>This dosen't happen often</h4>
                    <p>
                    This is usually a result of faulty wireless connection or a blip in the server,
                    please try refreshing your browser.
                    </p>
                </div>
                <div className="err-image">
                    <img src={Image} alt="404 error" />
                </div>
            </div>
        </div>
        
    )
}

export default Error
