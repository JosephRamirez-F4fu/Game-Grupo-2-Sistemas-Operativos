import MainPageButton from "../components/MainPageButton";
import { Link } from "react-router-dom";
function NotFoundPage(){
    return(
        <div className="NotFounPage">
            <img className="NotFoundPage-Img" alt="NotFoundPage-Img"/>
            <h1 className="NotFoundPage-Title">Oops!</h1>
            <p className="NotFoundPage-Text">Parece que a ocurrido un error...</p>
            <Link to="/" className="NotFoundPage-Link">
                <MainPageButton content="Volver al inicio"/>
            </Link>
        </div>
    )
}

export default NotFoundPage;